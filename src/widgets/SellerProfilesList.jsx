// components
import Pagination from "@ui/Pagination";
import SellerListItem from "@components/SellerListItem";
import CalendarSelector from "@components/CalendarSelector";
import Select from "@ui/Select";

// hooks
import usePagination from "@hooks/usePagination";
import { useState, useEffect } from "react";

// constants
import { SELLER_SORT_OPTIONS } from "@constants/options";

// API function
import { GetAllShopForAdmin } from "../api/shop";
import { statisticCategoryForShop } from "../api/categorie";

const SellerProfilesList = () => {
  const [sellers, setSellers] = useState([]); 
  const [sort, setSort] = useState(SELLER_SORT_OPTIONS[0]);
  const pagination = usePagination(sellers, 4);

  // Fetch sellers data on component mount
  useEffect(() => {
    const getSellers = async () => {
      const fetchedSellers = await GetAllShopForAdmin();
      const statisticCategory = await statisticCategoryForShop();

   const transformedSellers = fetchedSellers.shops.map((seller) => ({
     id: seller._id,
     logo: seller.logo, // Use the logo directly from the API
     name: seller.shop_name, // Map shop_name to name
     website: seller.website || "", // Use website if available, otherwise an empty string
     address: seller.address, // Map address directly
     phone: seller.phone_number, // Map phone_number directly
     email: `${seller.owner_id.userName
       .toLowerCase()
       .replace(/\s+/g, "")}@gmail.com`, // Generate email based on userName
     rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
     profit: statisticCategory,
     sales: Math.floor(Math.random() * 100000), // Random sales value
     totalOrdersEcommerce: seller.order_count, // Total orders from the API's root object
     totalRevenueEcommerce: seller.total_revenue, // Total revenue from the API's root object
   }));

      setSellers(transformedSellers); 
    };

    getSellers();
  }, []);

  useEffect(() => {
    pagination.goToPage(0);
  }, [sort]);

  return (
    <>
      <div className="flex flex-col gap-4 mb-5 md:flex-row md:mb-[26px] justify-between">
        <CalendarSelector wrapperClass="md:max-w-[275px]" id="sellerList" />
        <div className="flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]">
          <p className="md:text-right">
            View profiles: {pagination.showingOf()}
          </p>
          <Select
            value={sort}
            onChange={setSort}
            options={SELLER_SORT_OPTIONS}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-5 mb-[30px] md:gap-[26px]">
        {pagination.currentItems().map((seller, index) => (
          <SellerListItem key={seller.id} seller={seller} index={index} />
        ))}
      </div>
      {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
    </>
  );
};

export default SellerProfilesList;
