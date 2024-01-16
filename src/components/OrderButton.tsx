type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};

const OrderButton = ({ text, active, onClick }: Props) => {
  return (
    <div className="flex justify-center mb-10">
      <button
        disabled={!active}
        className={`w-4/5 py-4 bg-black text-white disabled:bg-[#C1C1C1]`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default OrderButton;
