import { getReviewForShop } from "../api/review";
import { statisticCategoryForShop } from "../api/categorie";
import { GetAllShopForAdmin } from "../api/shop";

let Sellers = [];

const fetchSellers = async () => {
  try {
    const fetchedSellers = await GetAllShopForAdmin();
    if (!fetchedSellers || !fetchedSellers.shops) {
      console.error("No shops data received");
      return;
    }

    const statisticCategories = await Promise.all(
      fetchedSellers.shops.map((shop) => statisticCategoryForShop(shop._id))
    );

    const reviewForShop = await Promise.all(
      fetchedSellers.shops.map((shop) => getReviewForShop(shop._id))
    );
    console.log("reviewForShop", reviewForShop);

    Sellers = fetchedSellers.shops.map((seller, index) => ({
      id: seller._id,
      logo: seller.logo,
      name: seller.shop_name,
      website: seller.website || "",
      address: seller.address,
      phone: seller.phone_number,
      email: `${seller.owner_id.userName
        .toLowerCase()
        .replace(/\s+/g, "")}@gmail.com`,
      rating: Math.floor(Math.random() * 5) + 1,
      profit: statisticCategories[index] || [],
      sales: Math.floor(Math.random() * 100000),
      totalOrdersEcommerce: seller.order_count,
      totalRevenueEcommerce: seller.total_revenue,
    }));
  } catch (error) {
    console.error("Error fetching sellers or statistics:", error);
  }
};

fetchSellers();

const getSellers = () => Sellers;

export { fetchSellers };
export default getSellers;
