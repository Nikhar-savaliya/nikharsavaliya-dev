import Image from "next/image";
import Link from "next/link";
import NavLinks from "./navigation-links";

const Navbar = () => {
  return (
    <nav className="flex flex-col min-[450px]:flex-row min-[450px]:items-center justify-between px-4 lg:px-0 gap-4 lg:gap-0 text-muted-foreground">
      <Link href={"/"}>
        <Image
          src={"https://avatars.githubusercontent.com/nikhar-savaliya"}
          alt="Profile Picture"
          width={72}
          height={72}
          className="size-12 border-2 border-[#939aa544] aspect-square rounded-xl"
        />
      </Link>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
