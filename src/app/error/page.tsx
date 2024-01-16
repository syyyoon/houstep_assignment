"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ErrorPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

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

export default ErrorPage;
