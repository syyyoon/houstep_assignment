export interface Item {
  id: string;
  name: string;
  event: 1 | 0;
  materialType: number;
  price: number;
  qty: number;
}

export interface CartItem {
  // item: Item;
  id: string;
  name: string;
  price: number;
  qty: number;
}
