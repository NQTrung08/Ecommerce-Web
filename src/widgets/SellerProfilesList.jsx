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
import { getReviewForShop } from "../api/review";

const SellerProfilesList = () => {
  const [sellers, setSellers] = useState([]);
  const [sort, setSort] = useState(SELLER_SORT_OPTIONS[0]);
  const pagination = usePagination(sellers, 4);

  useEffect(() => {
    const getSellers = async () => {
      try {
        const fetchedSellers = await GetAllShopForAdmin();
        if (!fetchedSellers || !fetchedSellers.shops) {
          console.error("No shops data received");
          return;
        }

        // Fetch statistics for each shop
        const statisticCategories = await Promise.all(
          fetchedSellers.shops.map((shop) => statisticCategoryForShop(shop._id))
        );

        const reviewForShop = await Promise.all(
          fetchedSellers.shops.map((shop) => getReviewForShop(shop._id))
        );
        const transformedSellers = fetchedSellers.shops.map((seller, index) => {
          const reviews = reviewForShop[index];
          const averageRating = reviews.length
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
            : 0; // If no reviews, rating is 0

          return {
            id: seller._id,
            logo: seller.logo,
            name: seller.shop_name,
            website: seller.website || "",
            address: seller.address,
            phone: seller.phone_number,
            email: `${seller.owner_id.userName
              .toLowerCase()
              .replace(/\s+/g, "")}@gmail.com`,
            rating: Math.floor(averageRating),
            profit: statisticCategories[index] || [],
            sales: Math.floor(Math.random() * 100000),
            totalOrdersEcommerce: seller.order_count,
            totalRevenueEcommerce: seller.total_revenue,
          };
        });

        setSellers(transformedSellers);
      } catch (error) {
        console.error("Error fetching sellers or statistics:", error);
      }
    };

    getSellers();
  }, []);

  useEffect(() => {
    pagination.goToPage(0);
  }, [sort]);

  console.log("sellers", sellers);
  return (
    <>
      <div className="flex flex-col gap-4 mb-5 md:flex-row md:mb-[26px] justify-between">
        <CalendarSelector wrapperClass="md:max-w-[275px]" id="sellerList" />
        <div className="flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]">
          <p className="md:text-right">
            Xem hồ sơ:{pagination.showingOf()}
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
