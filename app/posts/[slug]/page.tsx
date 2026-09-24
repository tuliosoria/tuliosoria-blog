import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate, readingTimeMinutes } from "@/lib/posts";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${site.url}/posts/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: site.author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.author],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <header className="mb-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
          {formatDate(post.date)} · {readingTimeMinutes(post.contentHtml)} min read
        </p>
        <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-balance md:text-[3.25rem]">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <div className="mt-14 border-t border-line pt-6">
        <Link
          href="/"
          className="text-sm font-semibold text-accent-deep transition-colors hover:text-accent"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
