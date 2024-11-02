import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../fetures/blogs/blogsSlice";
import sortReducer from "../fetures/sorts/sortSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    sort: sortReducer,
  },
});

export default store;
