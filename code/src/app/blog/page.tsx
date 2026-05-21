import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "ZenMicro Blog",
  description:
    "Insights on cloud cost optimization, FinOps, and getting the most out of your infrastructure.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          The ZenMicro Blog
        </h1>
        <p className="text-white/70 text-lg">
          Cloud cost optimization, FinOps, and infrastructure efficiency.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-white/60">No posts yet. Check back soon.</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <p className="text-white/50 text-sm mb-2">
                  {formatPostDate(post.date)}
                  {post.author ? ` • ${post.author}` : ""}
                </p>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-white/70">{post.excerpt}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[#247CF8]/20 text-[#247CF8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
