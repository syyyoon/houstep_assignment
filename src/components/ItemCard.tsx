import { useAppDispatch } from "@/lib/store";
import { Item } from "../interfaces/interfaces";
import QtyButton from "./QtyButton";
import { decrement, increment } from "@/lib/features/cart/cartSlice";

interface Props {
  item: Item;
  qty: number;
}

export default function ItemCard({ item, qty }: Props) {
  // const { name, event, price, id } = item;
  const totalPrice = item.price * Math.max(qty, 1);
  const dispatch = useAppDispatch();
  return (
    <li
      className={`mx-8 my-6 px-3 py-2 border border-stone-700 rounded-lg flex ${
        qty >= 1 && "bg-[#FEEFEA]"
      } `}
    >
      <span className="w-[62px] h-[62px] bg-[#D9D9D9]"></span>
      <div className="flex flex-col ml-4 grow justify-between ">
        {/* 상품명 & 이벤트 뱃지 */}
        <div className="justify-between">
          <span>{item.name}</span>
          {item.event === 1 && (
            <span className="mx-1 rounded-full text-white font-light text-[13px] py-1 px-2 bg-[#F75A2F]">
              이벤트
            </span>
          )}
        </div>
        {/* 수량 & 가격 */}
        <div className="flex justify-between">
          <QtyButton
            onIncrease={() => dispatch(increment(item))}
            onDecrease={() => dispatch(decrement(item))}
            qty={qty}
          />

          <span>{totalPrice.toLocaleString("kr-KR")} 원</span>
        </div>
      </div>
    </li>
  );
}
