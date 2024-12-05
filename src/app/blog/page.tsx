import { getPosts } from "@/lib/blog-utils";
import Link from "next/link";
import React from "react";
import { formatDate } from "./[slug]/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read what I may have to say",
  openGraph: {
    title: "Blog | Nikhar Savaliya",
    description: "Read what I may have to say",
    url: "https://nikharsavaliya.me/blog",
    images: [`/api/og?title=${encodeURIComponent("Nikhar's Blog")}`],
  },
  twitter: {
    title: "Blog | Nikhar Savaliya",
    description: "Read what I may have to say",
    images: [`/api/og?title=${encodeURIComponent("Nikhar's Blog")}`],
  },
};

const page = async () => {
  const posts = getPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return (
    <div className="mt-16 px-4 xl:px-0">
      <h2 className="text-3xl font-bold uppercase flex items-center text-white mb-4 ">
        blog
        <span className="text-accent ml-1"> ˮ</span>
      </h2>
      <p className="text-muted-foreground mb-12 leading-7">
        Read what I may have to say
      </p>
      <div className="flex flex-col gap-4 divide-y divide-neutral-800">
        {posts.map((post, index) => (
          <div key={post.slug} className="flex flex-col justify-between py-2">
            <p className="text-accent text-sm font-bold">#{index}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-accent py-1 self-start"
            >
              <div className="flex items-center gap-2">
                {post.metadata.title}
              </div>
              <p className="text-sm text-muted-foreground">
                {formatDate(post.metadata.date)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
