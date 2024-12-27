import { useState, useEffect } from "react";
import { Pagination, Spin } from "antd"; 
import SellerListItem from "@components/SellerListItem";

// API function
import { GetAllShopForAdmin } from "../api/shop";
import { statisticCategoryForShop } from "../api/categorie";
import { getReviewForShop } from "../api/review";

const SellerProfilesList = () => {
  const [sellers, setSellers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8); 
  const [loading, setLoading] = useState(true);

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
            : 0; 

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

        setLoading(false);
        setSellers(transformedSellers);
      } catch (error) {
        console.error("Error fetching sellers or statistics:", error);
      }
    };

    getSellers();
  }, []);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const currentSellers = sellers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="seller-profiles-list">
      {loading ? (
        <div className="flex justify-center items-center h-[400px]">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="flex flex-col flex-1 gap-5 mb-[30px] md:gap-[26px]">
            {currentSellers.map((seller, index) => (
              <SellerListItem key={seller.id} seller={seller} index={index} />
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={sellers.length}
            onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={[ 8, 12, 20]} 
            className="flex justify-center mt-5"
          />
        </>
      )}
    </div>
  );
};

export default SellerProfilesList;
