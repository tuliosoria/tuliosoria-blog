import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Hi, I&apos;m {site.name}.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Digital product and AI leader with nearly 20 years of experience — from
          co-founding an award-winning game studio to leading Deloitte
          Digital&apos;s national Product Management practice. I write here
          about AI and product management, building digital products, and the
          occasional game design detour.
        </p>
        <div className="mt-5">
          <Link
            href="/about"
            className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-300"
          >
            More about me →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          Writing
        </h2>
        {posts.length === 0 ? (
          <p className="text-neutral-500">No posts yet.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <p className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(post.date)}
                  </p>
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
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
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
