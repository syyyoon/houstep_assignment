import Image from "next/image";
import MoveToOrderButton from "@/components/MoveToOrderButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full bg-black flex flex-col justify-center items-center">
      <Image
        src={"/images/logo-black.png"}
        alt="logo_image"
        width={150}
        height={51}
        priority
      />
      <Link href={"/order"}>
        <MoveToOrderButton text="주문하러 가기" size="large" />
      </Link>
    </main>
  );
}
