type Props = {
  text: string;
  size: "large" | "small";
};

const MoveToOrderButton = ({ text, size = "large" }: Props) => {
  return (
    <button
      className={` bg-white text-black  ${
        size === "large"
          ? "text-[25px] mt-10 p-4 rounded-2xl"
          : "text-base mt-4 p-2 rounded-md"
      } hover:bg-gray-300`}
    >
      {text}
    </button>
  );
};

export default MoveToOrderButton;
