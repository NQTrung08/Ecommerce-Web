const ROUTES = [
  {
    name: "Dashboard",
    icon: "rectangle-history-circle-user-regular",
    links: [
      { name: "Sales Analytics", path: "/" },
      { name: "Sellers List", path: "/sellers-list" },
      { name: "Sellers Table", path: "/sellers-table" },
      { name: "Sellers Grid", path: "/sellers-grid" },
      { name: "Seller Profile", path: "/seller-profile" },
      { name: "Revenue by Period", path: "/revenue-by-period" },
    ],
  },
  {
    name: "Products",
    icon: "boxes-stacked-regular",
    links: [
      { name: "Top Products", path: "/top-products" },
      { name: "Products Grid", path: "/products-grid" },
      { name: "Products Management", path: "/products-management" },
      { name: "Product Editor", path: "/product-editor" },
      { name: "Banners", path: "/banners" },
    ],
  },
  {
    name: "Categories",
    icon: "folder-open",
    path: "/categories",
  },
  {
    name: "Orders",
    icon: "cart-shopping-regular",
    path: "/orders",
  },
  {
    name: "Statistics",
    icon: "chart-simple-regular",
    path: "/statistics",
  },
  {
    name: "Reviews",
    icon: "star-half-stroke-solid",
    path: "/reviews",
  },
  {
    name: "Customers",
    icon: "chart-user-regular",
    path: "/customers",
  },
  {
    name: "Transactions",
    icon: "money-check-dollar-pen-regular",
    path: "/transactions",
    qty: 279,
  },
];

export default ROUTES