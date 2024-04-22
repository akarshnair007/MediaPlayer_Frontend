import { serverURL } from "./baseURL";
import { commonAPI } from "./commonAPI";

// api for adding videos details
export const uploadVideoApi = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/videos`, reqBody);
};
//api to get uploaded videos

export const getUploadVideoApi = async () => {
  return await commonAPI("GET", `${serverURL}/videos`, "");
};

//api to delete a video
export const deleteVideoApi = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {});
};

//api to add watch History

export const addHistoryApi = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/history`, reqBody);
};

//get data from watch history

export const getDataHistoryApi = async () => {
  return await commonAPI("GET", `${serverURL}/history`, "");
};

//delete watch histroy

export const deleteWatchHistroyApi = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};

// api to add category

export const addToCategoryApi = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/category`, reqBody);
};

//api to get all category

export const getAllCategoryApi = async () => {
  return await commonAPI("GET", `${serverURL}/category`, "");
};

//api to delete category

export const deleteCategoryApi = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/category/${id}`, {});
};

//api to get particular video

export const getAvideo = async (id) => {
  return await commonAPI("GET", `${serverURL}/videos/${id}`, "");
};

//api to update the category

export const updateCategoryApi = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/category/${id}`, reqBody);
};
