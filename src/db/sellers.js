import { statisticCategoryForShop } from "api/categorie";
import { GetAllShopForAdmin } from "../api/shop";

let Sellers = []; 

// Function to fetch and update Sellers data
const fetchSellers = async () => {
  try {
    const fetchedSellers = await GetAllShopForAdmin();
    const fetchedstatisticCategory = await statisticCategoryForShop();
    console.log("Fetched sellers from DB:", fetchedSellers);
    // Update Sellers with the latest data
    Sellers = fetchedSellers.shops.map((seller) => ({
      id: seller._id,
      logo: seller.logo,
      name: seller.shop_name,
      website: "",
      address: seller.address,
      phone: seller.phone_number,
      email: `${seller.owner_id.userName}@gmail.com`,
      rating: Math.floor(Math.random() * 5) + 1,
      profit: {
        electronics: Math.floor(Math.random() * 10000),
        fashion: Math.floor(Math.random() * 10000),
        food: Math.floor(Math.random() * 10000),
        services: Math.floor(Math.random() * 10000),
      },
      sales: Math.floor(Math.random() * 100000),
    }));

    console.log("Updated Sellers array:", Sellers);
  } catch (error) {
    console.error("Error fetching sellers data:", error);
  }
};

// Trigger initial fetch
fetchSellers();

// Getter function to get the current Sellers array
const getSellers = () => Sellers;

export { fetchSellers };
export default getSellers;
