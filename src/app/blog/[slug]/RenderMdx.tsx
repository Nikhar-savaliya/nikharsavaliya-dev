import { MDXFileData } from "@/lib/blog-utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React, { Children, createElement, isValidElement } from "react";
import { codeToHtml } from "shiki";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index} className="p-2 text-left">
      {header}
    </th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="p-2 text-left">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({
  href,
  ...props
}: React.ComponentProps<typeof Link> & { href: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      alt={props.alt as string}
      className="rounded-lg"
      {...props}
      src={props.src as string}
      width={(props.width as number) || 1600}
      height={(props.height as number) || 900}
    />
  );
}

async function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  // Extract className from the children code tag
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === "code"
  ) as React.ReactElement<HTMLPreElement> | undefined;

  const className = codeElement?.props?.className ?? "";
  const isCodeBlock =
    typeof className === "string" && className.startsWith("language-");

  if (isCodeBlock) {
    const lang = className.split(" ")[0]?.split("-")[1] ?? "";

    if (!lang) {
      return <code {...props}>{children}</code>;
    }

    const html = await codeToHtml(String(codeElement?.props.children), {
      lang,
      themes: {
        dark: "kanagawa-dragon",
        light: "kanagawa-dragon",
      },
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // If not, return the component as is
  return <pre {...props}>{children}</pre>;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const HeadingComponent = ({ children }: { children: React.ReactNode }) => {
    const childrenString = Children.toArray(children).join("");
    const slug = slugify(childrenString);
    return createElement(`h${level}`, { id: slug }, [
      createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        },
        children
      ),
    ]);
  };
  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

const components = {
  a: CustomLink,
  img: CustomImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
  Table,
};

const RenderMdx = ({
  post,
  components: propComponents,
}: {
  post: MDXFileData;
  components?: any;
}) => {
  return (
    <MDXRemote
      source={post.content}
      components={{ ...components, ...(propComponents ?? {}) }}
    />
  );
};

export default RenderMdx;
