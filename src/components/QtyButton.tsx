import React from "react";

type Props = {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
};
const QtyButton = (props: Props) => {
  return (
    <div className="flex gap-2">
      <button onClick={props.onDecrease}>-</button>
      <span>{props.qty}</span>
      <button onClick={props.onIncrease}>+</button>
    </div>
  );
};

export default QtyButton;
