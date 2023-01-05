import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (_, { payload }: PayloadAction<string>) => payload,
    resetSearch: () => initialState
  },
});

export const {changeSearch, resetSearch} = searchSlice.actions;
export default searchSlice.reducer;
