import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Search from "@ui/Search";
import getProducts, { fetchProducts } from "../../db/products_management";
import ProductManagementCollapseItem from "../../components/ProductManagementCollapseItem";
import Pagination from "../../ui/Pagination";
import Empty from "../../components/Empty";
import StyledTable from "./styles";
import dayjs from "dayjs";
import usePagination from "../../hooks/usePagination";

const ProductManagementTable = () => {
  const { width } = useWindowSize();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("publish");
  const [activeCollapse, setActiveCollapse] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [change, setChange] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      console.log("category", category);
      await fetchProducts(category);
      setProducts(getProducts(category));
    };
    loadProducts();
  }, [category, change]);

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.sku.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  const dataByStatus = () => {
    return filteredProducts; // Use filtered products instead of all products
  };

  const pagination = usePagination(dataByStatus(), 8);

  useEffect(() => {
    setActiveCollapse("");
  }, [pagination.currentPage, width]);

  const handleCollapse = (sku) => {
    setActiveCollapse(activeCollapse === sku ? "" : sku);
  };

  const handleProductSelect = (sku, isSelected) => {
    setSelectedProducts((prevSelected) =>
      isSelected
        ? [...prevSelected, sku]
        : prevSelected.filter((selectedSku) => selectedSku !== sku)
    );
  };

  const PRODUCTS_MANAGEMENT_COLUMN_DEFS = [
    {
      title: (
        <div className="flex items-center justify-center">
          <i className="icon-image-regular text-[26px]" />
        </div>
      ),
      dataIndex: "image",
      width: 45,
      render: (image) => (
        <div className="img-wrapper w-[45px] h-[45px] flex items-center justify-center">
          <img src={image} alt="sản phẩm" />
        </div>
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      render: (text) => (
        <span className="inline-block h6 !text-sm max-w-[155px]">{text}</span>
      ),
    },
    { title: "SKU", dataIndex: "sku" },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      width: 130,
      render: (stock) => (
        <div className="flex items-center gap-5">
          {stock == null ? (
            "Theo yêu cầu"
          ) : (
            <span>
              <span className={`${stock !== 0 ? "text-green" : "text-red"}`}>
                {stock !== 0
                  ? stock >= 10
                    ? "Còn hàng "
                    : "Tồn kho thấp "
                  : "Hết hàng "}
              </span>
              ({stock})
            </span>
          )}
        </div>
      ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      render: (price) => {
        const formattedPrice = price
          ? price.toLocaleString("vi-VN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          : "0.00";

        return <span>₫{formattedPrice}</span>;
      },
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      render: (category) => (
        <button className="text-accent capitalize">{category}</button>
      ),
    },
    {
      title: "Đánh giá",
      dataIndex: "rateCount",
      render: (rateCount) => (
        <div className="flex items-center gap-2">
          <i
            className={`icon icon-star-${
              rateCount !== 0 ? "solid" : "regular"
            } text-lg leading-none`}
          />
          {rateCount !== 0 && <span className="mt-1">({rateCount})</span>}
        </div>
      ),
    },
    {
      title: "Ngày",
      dataIndex: "date",
      render: (date) => (
        <div className="flex flex-col items-start">
          <span className="font-bold text-header w-fit">
            {date && dayjs(date).format("DD/MM/YYYY")}
          </span>
        </div>
      ),
      responsive: ["lg"],
    }
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-4">
      </div>
      <div className="flex flex-col-reverse gap-4 mt-4 mb-5 items-center justify-center md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6">
        <p>Xem sản phẩm: {pagination.showingOf()}</p>
        <Search 
          wrapperClass="lg:w-[326px]" 
          placeholder="Tìm kiếm sản phẩm" 
          query={query}
          setQuery={setQuery} 
        />
      </div>
      {console.log("pagination.currentItems()", pagination.currentItems())}
      <div className="flex flex-1 flex-col gap-[22px]">
        {width >= 768 ? (
          <StyledTable
            columns={[
              {
                title: "Chọn",
                render: (text, product) => (
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={(e) =>
                      handleProductSelect(product.id, e.target.checked)
                    }
                  />
                ),
              },
              ...PRODUCTS_MANAGEMENT_COLUMN_DEFS,
            ]}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record.sku}
            locale={{ emptyText: <Empty text="Không tìm thấy sản phẩm" /> }}
            pagination={false}
          />
        ) : (
          <div className="flex flex-col gap-5">
            {pagination.currentItems().map((product, index) => (
              <ProductManagementCollapseItem
                key={`product-${index}`}
                product={product}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
              />
            ))}
          </div>
        )}
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  );
};

export default ProductManagementTable;
