const ROUTES = [
  {
    name: "Bảng điều khiển",
    icon: "rectangle-history-circle-user-regular",
    links: [
      { name: "Phân tích doanh số", path: "/" },
      { name: "Danh sách người bán", path: "/sellers-list" },
    ],
  },
  {
    name: "Sản phẩm",
    icon: "boxes-stacked-regular",
    links: [{ name: "Quản lý sản phẩm", path: "/products-management" }],
  },
  {
    name: "Danh mục",
    icon: "folder-open",
    path: "/categories",
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
