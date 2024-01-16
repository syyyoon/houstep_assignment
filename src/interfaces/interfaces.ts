export type Item = {
  id: string;
  name: string;
  event: 1 | 0;
  materialType: number;
  price: number;
  qty: number;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export type OrderData = {
  totalQty: number;
  totalPrice: number;
};
