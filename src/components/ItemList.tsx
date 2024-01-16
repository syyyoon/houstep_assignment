import { RootState, useAppSelector } from "@/lib/store";
import { Item } from "../interfaces/interfaces";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

type Props = {
  items: Item[];
};

const ItemList = ({ items }: Props) => {
  const [itemQty, setItemQty] = useState<{ [key: string]: number }>({});
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  useEffect(() => {
    const initialQty: { [key: string]: number } = {};
    items.forEach((item) => {
      initialQty[item.id] = 0;
    });
    setItemQty(initialQty);
  }, [items]);

  useEffect(() => {
    const updatedQuantities: { [key: string]: number } = {};
    cartItems.forEach((item) => {
      updatedQuantities[item.id] = item.qty;
    });
    setItemQty(updatedQuantities);
  }, [cartItems]);

  return (
    <ul className="pt-14 pb-44 bg-white">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} qty={itemQty[item.id] || 0} />
      ))}
    </ul>
  );
};

export default ItemList;
