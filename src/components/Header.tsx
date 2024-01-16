import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black p-4 fixed top-0 shadow-bottom z-10">
      <Link href={"/"}>
        <Image
          src={"/images/logo-black_small.png"}
          width={94}
          height={32}
          alt="logo"
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
