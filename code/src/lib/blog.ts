import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  cover?: string;
  tags?: string[];
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & { slug: string };

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function readPostFile(filename: string): Post | null {
  const fullPath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/, "");
  const fm = data as PostFrontmatter;
  if (fm.draft) return null;
  return {
    slug,
    title: fm.title,
    date: fm.date,
    excerpt: fm.excerpt,
    author: fm.author,
    cover: fm.cover,
    tags: fm.tags ?? [],
    draft: fm.draft ?? false,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  const posts = files
    .map((f) => readPostFile(f))
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const md = path.join(BLOG_DIR, `${slug}.md`);
  const filename = fs.existsSync(mdx)
    ? `${slug}.mdx`
    : fs.existsSync(md)
    ? `${slug}.md`
    : null;
  if (!filename) return null;
  return readPostFile(filename);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function formatPostDate(dateString: string): string {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
