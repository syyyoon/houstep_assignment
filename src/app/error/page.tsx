"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/order");
    }
  }, [countdown, router]);
  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center">
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
      <span>{countdown} 초 </span>
    </div>
  );
}
