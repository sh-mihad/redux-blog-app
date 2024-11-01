import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../fetures/blogs/blogsSlice";

const store = configureStore({
    reducer:{
        blogs : blogReducer
    }
})

export default store;