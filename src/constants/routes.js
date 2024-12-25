const ROUTES = [
  {
    name: "Tổng quan",
    icon: "rectangle-history-circle-user-regular",
    links: [
      { name: "Thống kê toàn sàn", path: "/" },
      // { name: "Thống kê cửa hàng", path: "/statistics-shop" },
      { name: "Danh sách cửa hàng", path: "/sellers-list" },
    ],
  },
  {
    name: "Sản phẩm",
    icon: "boxes-stacked-regular",
    links: [
      { name: "Danh mục", path: "/categories" },
      { name: "Quản lý sản phẩm", path: "/products-management" },
    ],
  },
  {
    name: "Đơn hàng",
    icon: "cart-shopping-regular",
    path: "/orders",
  },
  {
    name: "Đánh giá",
    icon: "star-half-stroke-solid",
    path: "/reviews",
  },
  {
    name: "Người dùng",
    icon: "chart-user-regular",
    path: "/customers",
  },
  {
    name: "Giao dịch",
    icon: "money-check-dollar-pen-regular",
    path: "/transactions",
  },
];

export default ROUTES;
