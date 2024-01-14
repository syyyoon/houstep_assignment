import { Item } from "@/service/item";

export default function ItemCard({
  id,
  name,
  event,
  materialType,
  price,
}: Item) {
  console.log(id);
  return (
    <li className="mx-8 my-6 px-3 py-2 border border-stone-700 rounded-lg flex ">
      <span className="w-[62px] h-[62px] bg-[#D9D9D9]"></span>
      <div className="flex flex-col ml-4 grow justify-between ">
        {/* 상품명 & 이벤트 뱃지 */}
        <div className="justify-between">
          <span>{name}</span>
          {event === 1 && (
            <span className="mx-1 rounded-full text-white font-light text-[13px] py-1 px-2 bg-[#F75A2F]">
              이벤트
            </span>
          )}
        </div>
        {/* 수량 & 가격 */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button> - </button>
            <span> 0</span>
            <button> + </button>
          </div>
          <span>{price?.toLocaleString("kr-KR")} 원</span>
        </div>
      </div>
    </li>
  );
}
