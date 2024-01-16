import { Item } from "../../../interfaces/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  itemList: Item[];
  isLoading: boolean;
};

const initialState = {
  itemList: [],
  isLoading: false,
} as InitialState;

export const fetchItems = createAsyncThunk("items/fetch", async () => {
  const res = await fetch("http://localhost:3001/items");
  const data = await res.json();
  return data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    initItemList: (state) => {
      state.itemList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemList = action.payload;
      });
  },
});

const itemsReducer = itemsSlice.reducer;
export const { initItemList } = itemsSlice.actions;

export default itemsReducer;
