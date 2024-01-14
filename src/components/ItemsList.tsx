import { Item } from "@/service/item";
import ItemCard from "./ItemCard";

type Props = {
  items: Item[];
};

export default function ItemsList({ items }: Props) {
  return (
    <ul className="bg-white">
      {items.map(({ id, name, event, materialType, price }, index) => (
        <ItemCard
          key={id}
          name={name}
          event={event}
          materialType={materialType}
          price={price}
        />
      ))}
    </ul>
  );
}
