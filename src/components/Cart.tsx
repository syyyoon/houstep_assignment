"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import OrderButton from "./OrderButton";
import {
  totalPriceSelector,
  totalCartItemsSelector,
  resetCart,
} from "@/lib/features/cart/cartSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitOrderForm } from "@/service/order";

type Props = {
  active: boolean;
};

export default function Cart({ active }: Props) {
  const totalPrice = useAppSelector(totalPriceSelector);
  const totalQty = useAppSelector(totalCartItemsSelector);
  const dispatch = useAppDispatch();
  const [isSending, setIsSending] = useState<boolean>(false);
  const router = useRouter();

  const orderSubmitHandler = async () => {
    if (totalQty === 0) return;
    try {
      setIsSending(true);
      const response = await submitOrderForm({
        totalQty,
        totalPrice,
      });
      console.log("주문 성공:", response);
      router.push("/complete");
    } catch (error) {
      console.error("주문 실패", error);
      router.push("/error");
    } finally {
      dispatch(resetCart());
    }
  };

  return (
    <div
      id="cartBox"
      className="w-full rounded-t-2xl fixed bottom-0 bg-white shadow-top z-10 "
    >
      <div className="flex flex-col items-end  py-5 pr-10 ">
        <p>총 수량 : {totalQty} 개</p>
        <p>총 가격 : {totalPrice.toLocaleString("ko-KR")} 원</p>
      </div>
      <OrderButton
        text={isSending ? "로딩중..." : "주문하기"}
        active={active && !isSending}
        onClick={orderSubmitHandler}
      />
    </div>
  );
}
