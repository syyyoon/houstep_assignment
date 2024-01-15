"use client";
import { useAppSelector } from "@/lib/store";
import RactangleButton from "./RactangleButton";
import {
  totalPriceSelector,
  totalCartItemsSelector,
} from "@/lib/features/cart/cartSlice";
import { useState } from "react";

type Props = {
  active: boolean;
};
type OrderStatus = {
  text: string;
  isReady: boolean;
};

export default function Cart({ active }: Props) {
  const initialState = {
    text: "주문하기",
    isReady: false,
  };
  const [isOrder, setIsOrder] = useState<OrderStatus>(initialState);
  const totalPrice = useAppSelector(totalPriceSelector);
  const totalQty = useAppSelector(totalCartItemsSelector);

  return (
    <div className="w-full rounded-t-2xl  border-2 sticky bottom-0 bg-white ">
      <div className="flex flex-col items-end  py-5 pr-10 ">
        <p>총 수량 : {totalQty} 개</p>
        <p>총 가격 : {totalPrice.toLocaleString("ko-KR")} 원</p>
      </div>
      {/* todo : order submit button */}
      <RactangleButton text={isOrder.text} active={active} onClick={() => {}} />
    </div>
  );
}
