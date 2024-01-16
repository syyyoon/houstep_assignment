import { totalCartItemsSelector } from "@/lib/features/cart/cartSlice";
import { useAppSelector } from "@/lib/store";

type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};

const OrderButton = ({ text, active, onClick }: Props) => {
  const totalQty = useAppSelector(totalCartItemsSelector);
  const disabled = !active || totalQty === 0;
  return (
    <div className="flex justify-center mb-10">
      <button
        disabled={disabled}
        className={`w-4/5 py-4 bg-black text-white disabled:bg-[#C1C1C1]`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default OrderButton;
