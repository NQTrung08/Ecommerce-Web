import axiosInstance from "../api/axiosInstance";
import { checkToken } from "@utils/auth";

import { URL_API } from "../config/config";

export const getTransaction = async () => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}transaction`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reviews", error);
    throw error;
  }
};
