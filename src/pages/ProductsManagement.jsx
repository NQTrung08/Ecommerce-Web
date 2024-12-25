// components
import PageHeader from "@layout/PageHeader";
import { CSVLink } from "react-csv";
import ProductManagementTable from "@widgets/ProductManagementTable";
import { useState, useEffect } from "react";
import getProducts, { fetchProducts } from "@db/products_management";

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      await fetchProducts();
      setProducts(getProducts());
    };

    loadProducts();
  }, []);

  return (
    <>
      <PageHeader title="Quản lý Sản phẩm" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <CSVLink className="btn btn--outline blue !h-[44px]" data={products}>
            Xuất CSV <i className="icon-file-export-solid" />
          </CSVLink>
        </div>
      </div>
      <ProductManagementTable products={products} />
    </>
  );
};

export default ProductsManagement;
