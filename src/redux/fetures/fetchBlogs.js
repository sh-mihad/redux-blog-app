import instance from "../../axios/axiosInstance";

export const fetchBlogsApi = async (filter) => {
  const path = filter === "saved" ? `/blogs?isSaved=true` : "/blogs";
  const response = await instance(path);
  return response.data;
};
