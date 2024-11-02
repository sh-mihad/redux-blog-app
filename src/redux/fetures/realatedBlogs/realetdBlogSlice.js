import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRelatedBLogs from "./relatedBlogsAPI";

const initialState = {
  loading: false,
  relatedBlogs: [],
  error: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchBlogs",
  async ({ tags, id }) => {
    return await fetchRelatedBLogs(tags, id);
  }
);
const relatedBlogSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.error = "";
        state.loading = true;
        state.relatedBlogs = [];
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.relatedBlogs = [];
      });
  },
});

export default relatedBlogSlice.reducer;
