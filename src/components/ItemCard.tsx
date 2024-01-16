import { useAppDispatch } from "@/lib/store";
import { Item } from "../interfaces/interfaces";
import QtyButton from "./QtyButton";
import { decrement, increment } from "@/lib/features/cart/cartSlice";
import React from "react";
import { EventBadge } from "./EventBadge";

type Props = {
  item: Item;
  qty: number;
};

const ItemCard = ({ item, qty }: Props) => {
  const totalPrice = (item.price * Math.max(qty, 1)).toLocaleString("kr-KR");
  const dispatch = useAppDispatch();

  return (
    <li
      className={`mx-8 my-6 px-3 py-2 border border-stone-700 rounded-lg flex ${
        qty >= 1 && "bg-[#FEEFEA]"
      } `}
    >
      <span className="w-[62px] h-[62px] bg-[#D9D9D9]"></span>
      <div className="flex flex-col ml-4 grow justify-between ">
        <div>
          <span>{item.name}</span>
          {item.event === 1 && <EventBadge />}
        </div>
        <div className="flex justify-between">
          <QtyButton
            onIncrease={() => dispatch(increment(item))}
            onDecrease={() => dispatch(decrement(item))}
            qty={qty}
          />

          <span>{totalPrice} 원</span>
        </div>
      </div>
    </li>
  );
};

export default React.memo(ItemCard);
