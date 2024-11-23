import { getPostBySlug } from "@/lib/blog-utils";
import { notFound } from "next/navigation";
import React from "react";
import RenderMdx from "./RenderMdx";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold capitalize pb-4 text-white">
        <span className="">{post.metadata.title}</span>
        <span className="text-accent ml-1">ˮ</span>
      </h2>

      <div className="mb-12 flex items-center justify-between text-sm text-gray-400">
        <span>{formatDate(post.metadata.date)}</span>
      </div>
      <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-white hover:prose-a:underline">
        <RenderMdx post={post} />
      </article>
    </div>
  );
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default page;
