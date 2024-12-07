import axiosInstance from "@api/axiosInstance";
import { URL_API } from "../../src/config/config";

export const getCatalogByShopId = async (ShopId) => {
  try {

    const response = await axiosInstance.get(
      `${URL_API}catalogShop/shop/${ShopId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
