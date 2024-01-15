import { RootState } from "@/lib/store";
import { CartItem, Item } from "../../../interfaces/interfaces";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find(
        (el) => el.id === action.payload.id
      );

      if (cartItem) {
        if (cartItem.qty < 999) cartItem.qty++;
      } else {
        // 처음 추가되는 상황
        state.cartItems.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find(
        (el) => el.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.id !== action.payload.id
          );
        }
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);
export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.price),
    0
  )
);

export const { increment, decrement, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
