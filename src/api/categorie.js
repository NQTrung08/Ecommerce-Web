import axiosInstance from "./axiosInstance";
import { URL_API } from "../../src/config/config";
import { checkToken } from "@utils/auth";

export const addCategory = async (parent_id, category_name, file) => {
  try {
    const formData = new FormData();
    formData.append("parent_id", parent_id);
    formData.append("category_name", category_name);
    if (file) {
      formData.append("file", file);
    }

    const config = checkToken("multipart/form-data");
    const response = await axiosInstance.post(
      `${URL_API}category`,
      formData,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to add category:", error);
    throw error;
  }
};

export const updateCategory = async (
  categoryId,
  { parent_id, category_name, file }
) => {
  try {
    const formData = new FormData();
    formData.append("category_name", category_name);
    formData.append("parent_id", parent_id || "");

    if (file) {
      formData.append("file", file);
    }

    const config = checkToken("multipart/form-data");
    const response = await axiosInstance.put(
      `${URL_API}category/${categoryId}`,
      formData,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Failed to update category:", error);
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.delete(
      `${URL_API}category/${categoryId}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to delete category:", error);
    throw error;
  }
};

export const createCategories = async () => {
  try {
    const response = await axiosInstance.post(`${URL_API}category/create`);
    return response.data;
  } catch (error) {
    console.error("Failed to create categories:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
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
    console.error("Failed to fetch category statistics", error);
    throw error;
  }
};

export const categoryBuildTree = async () => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}category/buildTree`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch category tree", error);
    throw error;
  }
};


export const updateParentForCategories = async (
  {
    categoryIds,
    newParentId,
    newIndex
  }
) => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.put(
      `${URL_API}category/move-node`,
      {
        categoryIds,
        newParentId,
        newIndex
      },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch category tree", error);
    throw error;
  }
};

export const statisticCategoryForShop = async () => {
  try {
    const config = checkToken("application/json");
    const response = await axiosInstance.get(
      `${URL_API}category/statistical/shop`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch category statistics", error);
    throw error;
  }
};

