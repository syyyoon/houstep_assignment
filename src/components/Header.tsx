import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-xl bg-black p-4 sticky top-0">
      <Image
        src={"/images/logo-black_small.png"}
        width={94}
        height={32}
        alt="logo"
        priority
      />
    </header>
  );
}
