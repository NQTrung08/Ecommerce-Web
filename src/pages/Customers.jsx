import { useEffect, useState } from "react";
import { Alert, Empty } from "antd";
import Loader from "../components/Loader";
import { getCustomer } from "../api/customer";
import PageHeader from "../layout/PageHeader";
import StyledTable from "../widgets/OrdersTable/styles";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomer();
        setCustomers(data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu khách hàng:", error);
        setError("Không thể tải danh sách khách hàng. Vui lòng thử lại.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Cấu hình các cột trong bảng
  const TRANSACTIONS_COLUMN_DEFS = [
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-full w-20 h-20 object-cover"
        />
      ),
    },
    {
      title: "Tên người dùng",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={status === "active" ? "text-green-500" : "text-red-500"}
        >
          {status === "active" ? "Đang hoạt động" : "Không hoạt động"}
        </span>
      ),
    }
  ];

  const paginationData = customers.slice(
    (pagination.currentPage - 1) * pagination.pageSize,
    pagination.currentPage * pagination.pageSize
  );

  return (
    <div className="w-full">
      <PageHeader title="Người dùng" />
      <div className=" bg-white rounded-lg w-full">
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert message={error} type="error" showIcon />
        ) : (
          <StyledTable
            columns={TRANSACTIONS_COLUMN_DEFS}
            dataSource={paginationData}
            rowKey={(record) => record._id}
            locale={{
              emptyText: <Empty text="Không tìm thấy khách hàng nào" />,
            }}
            pagination={false} 
          />
        )}
      </div>
    </div>
  );
};

export default Customers;
