import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  detail: [],
  search: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPopular, setDetail, setSearch } = movieSlice.actions;
export default movieSlice.reducer;
