import axiosInstance from "./axiosInstance";
import { getCookie } from "@utils/cookie";

// Get the base API URL from environment variables
import { URL_API } from "../../src/config/config";
import { checkToken } from "@utils/auth";

export const createCategories = async () => {
  try {
    // Use the environment variable for the base API URL
    const response = await axiosInstance.post(`${URL_API}category/create`);
    return response.data;
  } catch (error) {
    console.error("Failed to create categories:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    // Use the environment variable for the base API URL
    const response = await axiosInstance.get(`${URL_API}category`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw error;
  }
};

export const statisticCategoryForAdmin = async (sortBy, order) => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}category/statistical?sortBy=${sortBy}&order=${order}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    throw error;
  }
};


