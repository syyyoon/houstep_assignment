"use client";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/store";
import RactangleButton from "./RactangleButton";
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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isSending, setIsSending] = useState<boolean>(false);

  const orderSubmitHandler = async () => {
    // 주문 총 수량 0 이면 주문 x
    if (totalQty === 0) return;
    try {
      setIsSending(true);
      // 서버로 주문 데이터를 전송하고 응답을 기다림
      const response = await submitOrderForm({
        totalQty,
        totalPrice,
      });
      console.log("주문 성공:", response);
      // 주문이 성공적으로 완료된 후, 성공 페이지로 이동
      dispatch(resetCart());
      router.push("/complete");
    } catch (error) {
      console.error("주문 실패", error);
      router.push("/error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full rounded-t-2xl  border-2 sticky bottom-0 bg-white ">
      <div className="flex flex-col items-end  py-5 pr-10 ">
        <p>총 수량 : {totalQty} 개</p>
        <p>총 가격 : {totalPrice.toLocaleString("ko-KR")} 원</p>
      </div>
      <RactangleButton
        text={isSending ? "로딩중..." : "주문하기"}
        active={active}
        onClick={orderSubmitHandler}
      />
    </div>
  );
}
