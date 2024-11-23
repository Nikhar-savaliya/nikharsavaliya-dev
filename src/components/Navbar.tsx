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
    <nav className="flex items-center justify-between text-muted-foreground">
      <Link href={"/"}>
        <Image
          src={"https://avatars.githubusercontent.com/nikhar-savaliya"}
          alt="Profile Picture"
          width={512}
          height={512}
          className="size-12 border-[3px] border-[#939aa544] aspect-square rounded-2xl"
        />
      </Link>
      <div>
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
