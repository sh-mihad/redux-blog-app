import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    sort:"Default"
}

const sortSlice = createSlice({
    name:"sort",
    initialState,
    reducers:{
        sortBy:(state,action)=>{
            state.sort = action.payload
        }
    }
})

export default sortSlice.reducer;