import { Item } from "../../../interfaces/interfaces";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  itemList: Item[];
  isLoading: boolean;
}

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        // 비동기 작업이 시작되면 isLoading을 true로 설정
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        // 비동기 작업이 성공하면 isLoading을 false로 설정하고 데이터를 저장
        state.isLoading = false;
        state.itemList = action.payload;
      });
  },
});

const itemsReducer = itemsSlice.reducer;

export default itemsReducer;
