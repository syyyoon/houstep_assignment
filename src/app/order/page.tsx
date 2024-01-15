"use client";
import Header from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import Loading from "@/components/Loading";
import Cart from "@/components/Cart";
import { useState, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store";
import { fetchItems } from "@/lib/features/items/itemsSlice";

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const { itemsList, isLoading } = useAppSelector(
    (state: RootState) => state.items
  );

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(fetchItems());
    setIsActive(!isLoading);
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-white">
      <Header />
      {isLoading && <Loading />}
      {!isLoading && itemsList.length === 0 && <Loading />}
      {!isLoading && itemsList.length > 0 && <ItemsList items={itemsList} />}
      <Cart active={isActive} />
    </div>
  );
}
