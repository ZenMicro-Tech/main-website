import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { getAllSlugs, getPostBySlug, formatPostDate } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ZenMicro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

async function renderMarkdown(source: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(source);
  return String(file);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href="/blog"
        className="text-[#247CF8] text-sm hover:underline inline-block mb-8"
      >
        ← Back to all posts
      </Link>

      <header className="mb-10">
        <p className="text-white/50 text-sm mb-3">
          {formatPostDate(post.date)}
          {post.author ? ` • ${post.author}` : ""}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-white/70 text-lg">{post.excerpt}</p>
        )}
      </header>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
