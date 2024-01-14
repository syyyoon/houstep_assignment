import RactangleButton from "./RactangleButton";

type Props = {
  qty: number;
  price: number;
  active: boolean;
};

export default function OrderActionBox({ qty, price, active }: Props) {
  return (
    <div className="w-full rounded-t-2xl  border-2 sticky bottom-0 bg-white ">
      <div className="flex flex-col items-end  py-5 pr-4 ">
        <p>총 수량 : {qty} 개</p>
        <p>총 가격 : {price.toLocaleString("ko-KR")} 원</p>
      </div>

      <RactangleButton text={"주문하기"} active={active} />
    </div>
  );
}
