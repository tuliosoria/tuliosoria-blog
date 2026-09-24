import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
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
      <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
        {formatDate(post.date)}
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      {post.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div
        className="prose prose-neutral prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <div className="mt-12 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
