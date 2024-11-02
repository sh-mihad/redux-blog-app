import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateBlog } from "../blogs/blogsSliceAPI";
import { getSingleBLog } from "./singleBlogApi";
const initialState = {
  error: "",
  loading: false,
  blog: {},
};

export const fetchSingleBlog = createAsyncThunk(
  "blog/fetchSingleBlog",
  async (id) => {
    return getSingleBLog(id);
  }
);

export const editBlogs = createAsyncThunk("edit/patchBlog", async (blog) => {
  return await updateBlog(blog);
});

const singleBlogSLice = createSlice({
  name: "singleBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBlog.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.blog = {};
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.blog = {};
      })
      .addCase(editBlogs.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(editBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(editBlogs.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
        state.blog = {};
      });
  },
});

export default singleBlogSLice.reducer;
