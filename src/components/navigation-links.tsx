"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface navItemsType {
  link: string;
  text: string;
  keyShortcut: string;
}

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

function NavLinks() {
  const router = useRouter();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key) {
        case "h":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "b":
          router.push("/blog");
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [router]);

  return (
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
  );
}

export default NavLinks;
