import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Spring from "@components/Spring";
import StyledTable from "./styles";
import Select from "@ui/Select";
import Pagination from "@ui/Pagination";
import TransactionCollapseItem from "@components/TransactionCollapseItem";
import Empty from "@components/Empty";
import Loader from "@components/Loader";
import usePagination from "@hooks/usePagination";
import { useWindowSize } from "react-use";

import { TRANSACTIONS_COLUMN_DEFS } from "@constants/columnDefs";
import { TRANSACTIONS_SORT_OPTIONS } from "@constants/options";
import { fetchTransaction } from "@db/transactions";

const TransactionsTable = () => {
  const { width } = useWindowSize();
  const [activeCollapse, setActiveCollapse] = useState("");
  const [sort, setSort] = useState(TRANSACTIONS_SORT_OPTIONS[0]);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const pagination = usePagination(filteredTransactions, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransaction();
        setTransactions(data);
        setFilteredTransactions(data); // Initially set all transactions
        setLoader(false);
      } catch (error) {
        setError(error);
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Sort transactions based on the selected sort option
    const sorted = [...transactions].sort((a, b) => {
      if (sort.value === "recent") {
        return dayjs(b.timestamp).isBefore(dayjs(a.timestamp)) ? 1 : -1;
      } else if (sort.value === "oldest") {
        return dayjs(a.timestamp).isBefore(dayjs(b.timestamp)) ? 1 : -1;
      }
      return 0; // Keep order as is if no sort option is selected
    });

    setFilteredTransactions(sorted);
  }, [transactions, sort]);

  const handleCollapse = (sku) => {
    setActiveCollapse((prev) => (prev === sku ? "" : sku));
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex flex-col gap-4 mb-5 md:flex-row justify-between">
        <div className=" gap-2.5 md:min-w-[220px] flex flex-row justify-between items-center">
          <p className="md:text-right">
            Xem giao dịch: {pagination.showingOf()}
          </p>
          <Select
            options={TRANSACTIONS_SORT_OPTIONS}
            value={sort}
            onChange={setSort}
          />
        </div>
      </div>
      <Spring className="flex flex-col flex-1">
        {width >= 768 ? (
          <StyledTable
            columns={TRANSACTIONS_COLUMN_DEFS}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record.sku}
            locale={{
              emptyText: <Empty text="Không tìm thấy giao dịch nào" />,
            }}
            pagination={false}
          />
        ) : (
          <div className="flex flex-1 flex-col gap-5 mb-[26px]">
            {pagination.currentItems().map((item) => (
              <TransactionCollapseItem
                key={item.sku}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
                transaction={item}
              />
            ))}
          </div>
        )}
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </Spring>
    </>
  );
};

export default TransactionsTable;
