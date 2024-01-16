import MoveToOrderButton from "@/components/MoveToOrderButton";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-full bg-black text-center flex flex-col justify-center">
      <p className="text-white"> 해당 페이지는 찾을 수 없습니다.</p>
      <Link href={"/order"}>
        <MoveToOrderButton text="돌아가기" size="small" />
      </Link>
    </div>
  );
}
