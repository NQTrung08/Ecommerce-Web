import axiosInstance from "../api/axiosInstance";
import { checkToken } from "@utils/auth";
import { URL_API } from "../config/config";

export const getProfitForAdmin = async (
  page = 1,
  limit = 4,
  sortBy = "asc",
  includeStatistics = true,
  year = 2024
) => {
  try {
    const config = checkToken("application/json");

    const response = await axiosInstance.get(
      `${URL_API}shop/?page=${page}&limit=${limit}&sortBy=${sortBy}&includeStatistics=${includeStatistics}&year=${year}`,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw error;
  }
};

export const getBenegitForShop = async (includeStatistics = true, year = 2024) => {
  try {
   
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}shop/view-own?includeStatistics=${includeStatistics}&year=${year}`,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching shop's cart data:", error);
    throw error;
  }
};

export const getShopInfoForAdmin = async (id, quantity = 1, shopId, year= 2024) => {
  const config = checkToken("application/json");
  try {
    const url = `${URL_API}shop/admin/${shopId}?year=${year}`;
    const result = await axiosInstance.post(
      url,
      {
        productId: id,
        quantity,
      },
      config
    );

    console.log(config);
    return result;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

