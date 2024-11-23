import ScrambledText from "@/components/ScrambledText";
import { getPosts } from "@/lib/blog-utils";
import Link from "next/link";
import React from "react";
import { formatDate } from "./[slug]/page";

const page = async () => {
  const posts = getPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold capitalize flex items-center text-white mb-4 ">
        <ScrambledText text="Blogs" />{" "}
        <span className="text-accent ml-1"> ˮ</span>
      </h2>
      <p className="text-muted-foreground mb-12 leading-7">
        Read what I may have to say
      </p>
      <div className="flex flex-col gap-4 text-sm ">
        {posts.map((post, index) => (
          <div key={post.slug} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p className="text-accent text-xs -mt-1">{index}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-accent py-1"
              >
                {post.metadata.title}
              </Link>
            </div>
            <p>{formatDate(post.metadata.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
