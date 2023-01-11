import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IItem from "interfaces/Item";
import itemsService from "services/items";

const initialState: IItem[] = [];

export const fetchItems = createAsyncThunk("items/fetch", itemsService.find);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    changeFavorite: (state, { payload }: PayloadAction<string>) => {
      state.map((item) => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    },
    registerItem: (state, { payload }: PayloadAction<IItem>) => {
      state.push(payload);
      console.log(payload);
    },
    changeItem: (
      state,
      { payload }: PayloadAction<{ id: string; title: string }>
    ) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], { title: payload.title });
    },
    deleteItem: (state, { payload }: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItems.fulfilled,
      (_, { payload }: PayloadAction<IItem[]>) => {
        return payload;
      }
    );
  },
});

export const { changeFavorite, registerItem, changeItem, deleteItem } =
  itemsSlice.actions;

export default itemsSlice.reducer;
