type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className="p-4 mt-10 bg-white text-black rounded-2xl text-[25px] hover:bg-gray-300">
      {text}
    </button>
  );
}
