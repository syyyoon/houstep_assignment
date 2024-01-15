import { RootState, useAppDispatch, useAppSelector } from "@/lib/store";
import { Item } from "../interfaces/interfaces";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

type Props = {
  items: Item[];
};

export default function ItemsList({ items }: Props) {
  const [itemQty, setItemQty] = useState<{ [key: string]: number }>({});
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  console.log("itemQty", itemQty);

  useEffect(() => {
    const initialQty: { [key: string]: number } = {};
    items.forEach((item) => {
      initialQty[item.id] = 0;
    });
    setItemQty(initialQty);
  }, [items]);

  useEffect(() => {
    // Redux 상태에 있는 카트 아이템을 기반으로 수량 및 총 가격을 업데이트
    const updatedQuantities: { [key: string]: number } = {};
    cartItems.forEach((item) => {
      updatedQuantities[item.id] = item.qty;
    });
    setItemQty(updatedQuantities);
  }, [cartItems]);

  return (
    <ul className="bg-white">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} qty={itemQty[item.id] || 0} />
      ))}
    </ul>
  );
}
