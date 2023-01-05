import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICart from "interfaces/Cart";

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeCart: (state, { payload }: PayloadAction<string>) => {
      const hasItem = state.some((item) => item.id === payload);
      if (!hasItem) {
        return [...state, { id: payload, quantity: 1 }];
      }
      return state.filter((item) => item.id !== payload);
    },

    changeQuantity: (state, { payload }: PayloadAction<ICart>) => {
      state.map((itemInCart) => {
        if (itemInCart.id === payload.id)
          itemInCart.quantity += payload.quantity;
        return itemInCart;
      });
    },

    resetCart: () => initialState
  },
});

export const { changeCart, changeQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
