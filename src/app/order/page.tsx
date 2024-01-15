"use client";
import Header from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import Loading from "@/components/Loading";
import Cart from "@/components/Cart";
import { useState, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store";
import { fetchItems } from "@/lib/features/items/itemsSlice";
import { resetCart } from "@/lib/features/cart/cartSlice";

export default function OrderPage() {
  const dispatch = useAppDispatch();

  const { itemList, isLoading } = useAppSelector(
    (state: RootState) => state.items
  );
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    dispatch(fetchItems());
    // dispatch(resetCart());
    setIsActive(!isLoading);
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-white">
      <Header />
      {isLoading && <Loading />}
      {!isLoading && itemList.length === 0 && <Loading />}
      {!isLoading && itemList.length > 0 && <ItemsList items={itemList} />}
      <Cart active={isActive} />
    </div>
  );
}
