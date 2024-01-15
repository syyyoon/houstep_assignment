interface OrderData {
  totalQty: number;
  totalPrice: number;
}

export async function submitOrderForm(order: OrderData) {
  try {
    const response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("서버 요청에 실패하였습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("주문 에러", error);
    throw error;
  }
}
