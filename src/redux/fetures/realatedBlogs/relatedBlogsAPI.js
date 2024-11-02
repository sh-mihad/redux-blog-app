import instance from "../../../axios/axiosInstance";

const fetchRelatedBLogs = async (tags, id) => {
  console.log("id", id);
  const filterPath = tags?.map((tag) => `tags_like=${tag}`).join("&");
  const response = await instance(`/blogs?${filterPath}&id_ne=${id}`);
  return response.data;
};

export default fetchRelatedBLogs;
