import Link from "next/link";
import { Icons } from "./Icons";

interface SectionListProps {
  title: string;
  items: SectionItem[];
  viewAllHref?: string;
  viewAllText?: string;
}

export interface SectionItem {
  title: string;
  role: string;
  description: string;
  href: string;
  period?: string;
}

const SectionList = ({
  title,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) => {
  return (
    <section className="mt-16 mb-8 mx-4 xl:mx-0">
      <h2 className="text-2xl uppercase font-bold pb-4 flex items-center text-white mb-4 border-b border-border">
        {title} <span className="text-accent ml-1"> ˮ</span>
      </h2>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.title} className="group pl-2 flex flex-col gap-x-2">
            <p className="text-accent text-sm font-bold">#{index}</p>
            <Link href={item.href} target="_blank">
              <h3 className="font-semibold mb-1 text-white group-hover:text-accent">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {item.role} {item.period && `(${item.period})`}
              </p>
              <p className="text-foreground">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 mt-6 ml-2 capitalize text-accent hover:underline group"
        >
          {viewAllText}{" "}
          <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  );
};

export default SectionList;
