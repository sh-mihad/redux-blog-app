import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../fetures/blogs/blogsSlice";
import filterReducer from "../fetures/filters/filterSlice";
import sortReducer from "../fetures/sorts/sortSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
});

export default store;
