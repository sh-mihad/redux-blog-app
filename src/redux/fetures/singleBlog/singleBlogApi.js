import instance from "../../../axios/axiosInstance";

export const getSingleBLog = async (id) => {
  const response = await instance(`/blogs/${id}`);
  return response.data;
};
