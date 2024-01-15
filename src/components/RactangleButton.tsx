type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export default function RactangleButton({ text, active, onClick }: Props) {
  return (
    <div className="flex justify-center mb-10">
      <button
        className={`w-4/5 py-4 ${
          active ? "bg-black" : "bg-[#C1C1C1]"
        } text-white`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
