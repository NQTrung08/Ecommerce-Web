import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Spring from "@components/Spring";
import StyledTable from "./styles";
import CalendarSelector from "@components/CalendarSelector";
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
  const [dateRange, setDateRange] = useState([dayjs().startOf("year"), dayjs()]);

  const pagination = usePagination(filteredTransactions, 6);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedTransactions = await fetchTransaction();
        setTransactions(fetchedTransactions);
        setFilteredTransactions(fetchedTransactions);
      } catch (error) {
        setError("Failed to fetch transactions");
        console.error("Error fetching transactions", error);
      } finally {
        setLoader(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const filterAndSortByDateRange = () => {
      const [start, end] = dateRange;
  
      // Lọc giao dịch theo phạm vi ngày đã chọn
      const filtered = transactions.filter(
        (transaction) =>
          dayjs(transaction.timestamp).isAfter(start, 'day') &&
          dayjs(transaction.timestamp).isBefore(end, 'day')
      );
  
      // Sắp xếp giao dịch theo thứ tự ngày
      const sorted = filtered.sort((a, b) => {
        if (sort.value === "recent") {
          return dayjs(b.timestamp).isBefore(dayjs(a.timestamp)) ? 1 : -1;
        } else if (sort.value === "oldest") {
          return dayjs(a.timestamp).isBefore(dayjs(b.timestamp)) ? 1 : -1;
        }
        return 0; // Giữ nguyên nếu không có lựa chọn sắp xếp
      });
  
      setFilteredTransactions(sorted);
    };
  
    filterAndSortByDateRange();
  }, [dateRange, transactions, sort]);
  

  const handleCollapse = (sku) => {
    setActiveCollapse((prev) => (prev === sku ? "" : sku));
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex flex-col gap-4 mb-5 md:flex-row justify-between">
        <CalendarSelector
          wrapperClass="md:max-w-[275px]"
          id="transactionsDate"
          label="Ngày giao dịch từ"
          onChange={setDateRange}
        />
        <div className="flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]">
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
