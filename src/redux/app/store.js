import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../fetures/blogs/blogsSlice";
import filterReducer from "../fetures/filters/filterSlice";
import relatedBlogsReducer from "../fetures/realatedBlogs/realetdBlogSlice";
import singleBlogReducer from "../fetures/singleBlog/singleBlogSlice";
import sortReducer from "../fetures/sorts/sortSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    sort: sortReducer,
    filter: filterReducer,
    blog: singleBlogReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});

export default store;
