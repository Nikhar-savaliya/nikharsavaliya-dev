import Image from "next/image";
import Link from "next/link";

interface navItemsType {
  link: string;
  text: string;
  keyShortcut: string;
}
const Navbar = () => {
  const navItems: navItemsType[] = [
    {
      text: "home",
      link: "/",
      keyShortcut: "h",
    },
    {
      text: "projects",
      link: "/projects",
      keyShortcut: "p",
    },
    {
      text: "blog",
      link: "/blog",
      keyShortcut: "b",
    },
  ];
  return (
    <nav className="flex flex-col min-[450px]:flex-row min-[450px]:items-center justify-between px-4 lg:px-0 gap-4 lg:gap-0 text-muted-foreground">
      <Link href={"/"}>
        <Image
          src={"https://avatars.githubusercontent.com/nikhar-savaliya"}
          alt="Profile Picture"
          width={72}
          height={72}
          className="size-12 border-2 border-[#939aa544] aspect-square rounded"
        />
      </Link>
      <div className="flex flex-wrap">
        {navItems.map((navItem) => {
          return (
            <Link
              key={navItem.link}
              href={navItem.link}
              className="mr-8 text-sm hover:text-accent group leading-7"
            >
              <span className="text-accent group-hover:text-accent">
                [{navItem.keyShortcut}]
              </span>
              <span className="ml-1">{navItem.text}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
