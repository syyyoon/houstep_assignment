"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CompletePage() {
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
    <div className="bg-white w-full h-full flex flex-col justify-center items-center gap-2 ">
      <Image
        src={"/images/CheckFIlled.png"}
        width={48}
        height={48}
        alt="completed"
      />
      <p>주문이 완료되었습니다.</p>
      <span>{countdown} 초</span>
    </div>
  );
}
