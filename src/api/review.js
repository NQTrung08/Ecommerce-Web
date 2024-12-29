import axiosInstance from "../api/axiosInstance";
import { checkToken } from "@utils/auth";

import { URL_API } from "../../src/config/config";

export const getAllReview = async () => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(`${URL_API}review`, config);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    throw error;
  }
};

export const getReviewForShop = async (id) => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}review/shop/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    throw error;
  }
};

export const createReview = async (productId, rating, comment) => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.post(
      `${URL_API}review`,
      { productId, rating, comment },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create review", error);
    throw error;
  }
};
export const getCountReviews = async (type = "admin", id = "") => {
  try {
    console.log("type", type, id);
    const config = checkToken("application/json");

    // Dữ liệu cần truyền vào payload
    const payload = { type };
    if (type !== "admin") {
      payload.id = id; // Chỉ thêm id nếu type không phải là admin
    }

    const response = await axiosInstance.post(`${URL_API}review/counts`, payload, config);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    throw error;
  }
};
