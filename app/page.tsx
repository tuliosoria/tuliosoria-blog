import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="hero-enter mb-16 mt-2">
        <h1 className="font-display text-5xl font-medium tracking-[-0.02em] text-balance md:text-6xl">
          Hi, I&apos;m {site.name}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Digital product and AI leader with nearly 20 years of experience — from
          co-founding an award-winning game studio to leading Deloitte
          Digital&apos;s national Product Management practice. I write here
          about AI and product management, building digital products, and the
          occasional game design detour.
        </p>
        <div className="mt-6">
          <Link
            href="/about"
            className="text-sm font-semibold text-accent-deep underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            More about me →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-ink-soft">
          Writing
        </h2>
        {posts.length === 0 ? (
          <p className="text-ink-soft">No posts yet.</p>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <li key={post.slug} className="group py-9">
                <article>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {formatDate(post.date)}
                  </p>
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="font-display text-3xl font-medium tracking-[-0.01em] text-balance transition-colors group-hover:text-accent-deep">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
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
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
