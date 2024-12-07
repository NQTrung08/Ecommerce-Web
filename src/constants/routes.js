const ROUTES = [
  {
    name: "Bảng điều khiển",
    icon: "rectangle-history-circle-user-regular",
    links: [
      { name: "Phân tích doanh số", path: "/" },
      { name: "Danh sách người bán", path: "/sellers-list" },
      { name: "Bảng người bán", path: "/sellers-table" },
      { name: "Lưới người bán", path: "/sellers-grid" },
    ],
  },
  {
    name: "Sản phẩm",
    icon: "boxes-stacked-regular",
    links: [
      { name: "Sản phẩm hàng đầu", path: "/top-products" },
      { name: "Quản lý sản phẩm", path: "/products-management" },
      { name: "Trình chỉnh sửa sản phẩm", path: "/product-editor" },
    ],
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
    name: "Khách hàng",
    icon: "chart-user-regular",
    path: "/customers",
  },
];

export default ROUTES;
