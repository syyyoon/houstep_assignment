type Props = {
  text: string;
  active: boolean;
};

export default function RactangleButton({ text, active }: Props) {
  return (
    <div className="flex justify-center mb-10">
      <button
        className={`w-3/4 py-4 ${
          active ? "bg-black" : "bg-[#C1C1C1]"
        } text-white`}
      >
        {text}
      </button>
    </div>
  );
}
