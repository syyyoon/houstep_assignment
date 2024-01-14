import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full bg-black flex flex-col justify-center items-center">
      <div>
        <Image
          src={"/images/logo-black.png"}
          alt="logo_image"
          width={150}
          height={51}
          priority
        />
      </div>
      <Link href={"/order"}>
        <Button text="주문하러 가기" />
      </Link>
    </main>
  );
}
