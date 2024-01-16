"use client";

import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import Loading from "@/components/Loading";
import Cart from "@/components/Cart";
import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store";
import { fetchItems, initItemList } from "@/lib/features/items/itemsSlice";

export default function OrderPage() {
  const dispatch = useAppDispatch();

  const { itemList, isLoading } = useAppSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(initItemList());
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col bg-white  ">
      <Header />
      <main className="grow">
        {isLoading && <Loading />}
        {!isLoading && itemList.length === 0 && <Loading />}
        {!isLoading && itemList.length > 0 && <ItemList items={itemList} />}
      </main>
      <Cart active={itemList.length > 0} />
    </div>
  );
}
