"use client";
import Header from "@/components/Header";
import ItemsList from "@/components/ItemsList";
import Loading from "@/components/Loading";
import OrderActionBox from "@/components/OrderActionBox";
import { useState, useEffect } from "react";

export default function OrderPage() {
  const [itemsList, setItemsList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/items");
      const jsonData = await response.json();
      setItemsList(jsonData);
      setIsActive(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-white">
      <Header />
      {itemsList.length === 0 && <Loading />}
      <ItemsList items={itemsList} />
      <OrderActionBox qty={0} price={0} active={isActive} />
    </div>
  );
}
