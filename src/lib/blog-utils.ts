import path from "path";
import fs from "fs";

export type Metadata = {
  title: string;
  description: string;
  date: string;
  views?: string;
};

export type FrontmatterParseResult = {
  metadata: Metadata;
  content: string;
};

export type MDXFileData = FrontmatterParseResult & { slug: string };

// returns file names as string that are present under dir. ex: hello_world.mdx
function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 *
 * @param fileContent
 * @returns {metadata, content} files content and frontmatter as metadata.
 */
function parseFrontmatter(fileContent: string): FrontmatterParseResult {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("No frontmatter found");
  }

  const frontmatter = match[1];

  if (!frontmatter) {
    throw new Error("No frontmatter found");
  }

  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontmatterLines = frontmatter.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontmatterLines.forEach((line) => {
    const [key, ...values] = line.split(": ");
    let value = values.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    if (key && value) {
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

/**
 *
 * @param filePath
 * @returns metadata and files content as object
 */
function readMDXFile(filePath: string): FrontmatterParseResult {
  const rawContent = fs.readFileSync(filePath, "utf-8");

  return parseFrontmatter(rawContent);
}

/**
 *
 * @param dir directory name where mdx files are stored
 * @returns
 */
function getMDXData(dir: string): MDXFileData[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(): MDXFileData[] {
  return getMDXData(path.join(process.cwd(), "posts"));
}

export function getPostBySlug(slug: string): MDXFileData | null {
  return getPosts().find((post) => post.slug === slug) ?? null;
}
