import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogsApi } from "./blogsSliceAPI";

const initialState = {
  loading: false,
  blogs: [],
  error: "",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (filter) => {
    return await fetchBlogsApi(filter);
  }
);
// export const editBlogs = createAsyncThunk("edit/patchBlog", async (blog) => {
//   return await updateBlog(blog);
// });
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.error = "";
        state.loading = true;
        state.blogs = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.blogs = [];
      });
    // .addCase(editBlogs.pending, (state) => {
    //   state.loading = true;
    //   state.error = "";
    // })
    // .addCase(editBlogs.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = "";
    //   const getIndex = state.blogs.findIndex(
    //     (blog) => blog.id === action.payload.id
    //   );
    //   if (getIndex !== 1) {
    //     state[getIndex] = action.payload;
    //   }
    // });
  },
});

export default blogsSlice.reducer;
