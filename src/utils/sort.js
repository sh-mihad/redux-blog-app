const blogSort = (blogs, sortBy) => {
  let sortData = null;
  const copyBlogs = [...blogs];
  if (sortBy === "newest") {
    sortData = copyBlogs?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } else if (sortBy === "mostLiked") {
    sortData = copyBlogs?.sort((a, b) => b.likes - a.likes);
  } else {
    sortData = copyBlogs;
  }
  return sortData;
};

export default blogSort;
