import instance from "../../../axios/axiosInstance";

export const fetchBlogsApi = async (filter = "all") => {
  const path = filter === "saved" ? `/blogs?isSaved=true` : "/blogs";
  const response = await instance(path);
  return response.data;
};

export const updateBlog = async (blog) => {
  try {
    const response = await instance.patch(`/blogs/${blog.id}`, blog);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
