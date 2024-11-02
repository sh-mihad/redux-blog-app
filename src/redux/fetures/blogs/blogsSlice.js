import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchBlogsApi } from "../fetchBlogs"

const initialState = {
    loading:false,
    blogs:[],
    error:""
}

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs",async()=>{
    return  await fetchBlogsApi()
})

const blogsSlice = createSlice({
    name:"blogs",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending,(state)=>{
            state.error = ""
            state.loading = true;
            state.blogs=[]
        })
        .addCase(fetchBlogs.fulfilled,(state,action)=>{
            state.error = ""
            state.loading = false;
            state.blogs=action.payload
        })
        .addCase(fetchBlogs.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
            state.blogs=[]
        })
    }
})

export default blogsSlice.reducer;