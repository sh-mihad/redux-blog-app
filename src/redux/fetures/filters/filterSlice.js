import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterAction } = filterSlice.actions;
