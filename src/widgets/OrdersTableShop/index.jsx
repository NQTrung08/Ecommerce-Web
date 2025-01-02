import dayjs from "dayjs";
import { useState } from "react";
import { Pagination } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersTable = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [shopFilter, setShopFilter] = useState("");
  const [orderIdFilter, setOrderIdFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const filteredOrders = orders.filter((order) => {
    const orderDate = dayjs(order.createdAt);
    const isAfterStartDate = startDate
      ? orderDate.isAfter(dayjs(startDate).subtract(1, "day"))
      : true;
    const isBeforeEndDate = endDate
      ? orderDate.isBefore(dayjs(endDate).add(1, "day"))
      : true;
    const matchesShopFilter = shopFilter
      ? order.order_shopId?.shop_name
          .toLowerCase()
          .includes(shopFilter.toLowerCase())
      : true;
    const matchesOrderIdFilter = orderIdFilter
      ? order.order_trackingNumber
          .toLowerCase()
          .includes(orderIdFilter.toLowerCase())
      : true;
    
    return (
      isAfterStartDate &&
      isBeforeEndDate &&
      matchesShopFilter &&
      matchesOrderIdFilter
    );
  });

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
      {/* Date Filters */}
      {/* <div className="mb-4 flex space-x-4">
        <div className="w-full">
          <label
            htmlFor="start-date"
            className="block text-lg font-medium text-gray-700"
          >
            Ngày bắt đầu:
          </label>
          <input
            type="date"
            id="start-date"
            className="mt-1 block w-full border-2 border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="end-date"
            className="block text-lg font-medium text-gray-700"
          >
            Ngày kết thúc:
          </label>
          <input
            type="date"
            id="end-date"
            className="mt-1 block w-full border-2 border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div> */}

      {/* Shop and Order ID Filters */}
      <div className="mb-4 flex space-x-4">
        <div className="w-full">
          <label
            htmlFor="shop-filter"
            className="block text-lg font-medium text-gray-700"
          >
            Tên Shop:
          </label>
          <input
            type="text"
            id="shop-filter"
            className="mt-1 block w-full border-2 border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            value={shopFilter}
            onChange={(e) => setShopFilter(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="order-id-filter"
            className="block text-lg font-medium text-gray-700"
          >
            Mã đơn hàng:
          </label>
          <input
            type="text"
            id="order-id-filter"
            className="mt-1 block w-full border-2 border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
            value={orderIdFilter}
            onChange={(e) => setOrderIdFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Danh sách đơn hàng */}
      {paginatedOrders.length === 0 ? (
        <p className="text-gray-600 text-center">
          Không có đơn hàng nào để hiển thị.
        </p>
      ) : (
        paginatedOrders.map((order) => (
          <div
            key={order._id}
            className="flex justify-between items-center border-b py-4 px-6 bg-white rounded-lg shadow-md"
          >
            {/* Thông tin Shop */}
            <div className="flex items-center mx-3">
              {order.order_shopId?.logo ? (
                <img
                  src={order.order_shopId.logo}
                  alt="Shop Logo"
                  className="w-20 h-20 rounded-full mr-4"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600">No Logo</span>
                </div>
              )}
              <div>
                {order.order_shopId ? (
                  <>
                    <p className="text-lg text-gray-800 font-semibold">
                      Shop: {order.order_shopId.shop_name}
                    </p>
                    <p className="text-base text-gray-600">
                      Địa chỉ: {order.order_shopId.address}
                    </p>
                    <p className="text-base text-gray-600">
                      Điện thoại: {order.order_shopId.phone_number}
                    </p>
                    <p className="text-base text-gray-600">
                      Mô tả: {order.order_shopId.description}
                    </p>
                  </>
                ) : (
                  <p className="text-base text-rose-600">Shop bị khóa</p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-start w-5/12">
              <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-800">
                  Mã đơn hàng:{" "}
                  <span className="text-blue-600">
                    {order.order_trackingNumber}
                  </span>
                </h3>
                <p className="text-sm text-gray-600">
                  Ngày tạo: {dayjs(order.createdAt).format("DD/MM/YYYY")}
                </p>
                <p className="text-sm text-gray-600">
                  Trạng thái:{" "}
                  <span className="font-medium">{order.order_status}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Địa chỉ giao hàng: {order.order_shipping_address}
                </p>
                <p className="text-sm text-gray-600">
                  Phương thức thanh toán:{" "}
                  <span className="font-medium">
                    {order.order_payment_method.toUpperCase()}
                  </span>
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Tổng tiền:{" "}
                  <span className="text-red-600">
                    {order.order_total_price.toLocaleString()}₫
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      )}

      <Pagination
        current={currentPage}
        total={filteredOrders.length}
        pageSize={pageSize}
        onChange={onPageChange}
        showSizeChanger={false}
        className="mt-4"
      />

      <ToastContainer />
    </div>
  );
};

export default OrdersTable;
