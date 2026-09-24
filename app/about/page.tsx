import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.author} — digital product and AI leader, Deloitte Digital national Product Management craft leader, MBA Texas McCombs, and co-founder of an award-winning game studio.`,
};

export default function About() {
  return (
    <div>
      <h1 className="mb-8 font-display text-4xl font-medium tracking-[-0.02em] text-balance md:text-5xl">About</h1>
      <div className="prose prose-lg">
        <p>
          I&apos;m <strong>Tulio Soria</strong>, a digital product and AI leader
          with nearly 20 years of experience building digital products — from
          co-founding an award-winning game studio in Brazil to leading
          Deloitte Digital&apos;s national Product Management practice in the
          US.
        </p>
        <p>
          Today I&apos;m a Senior Manager at Deloitte Consulting, where I serve
          as the national Product Craft Leader: I sell and lead end-to-end
          digital product launches for Fortune 500 clients, scale a practice of
          68 product managers, and drive our AI-enabled product agenda. I hold
          an MBA from Texas McCombs.
        </p>
        <p>
          Before consulting, I co-founded <strong>Mother Gaia Studio</strong>{" "}
          after winning the 2008 Imagine Cup in Game Design — first place
          worldwide. We shipped 16 games, raised venture funding, and built
          client games for PayPal, Coca-Cola, Pepsi, and Disney. That&apos;s
          where I learned that shipping beats theorizing, a lesson consulting
          never managed to unteach me.
        </p>
        <h2>What I write about</h2>
        <ul>
          <li>
            <strong>AI and product management</strong> — what generative AI
            actually changes about discovery, delivery, and product leadership
            (the subject of the book I&apos;m writing).
          </li>
          <li>
            <strong>Building digital products</strong> — craft notes from two
            decades of launches, for enterprise and startup teams alike.
          </li>
          <li>
            <strong>Games and systems</strong> — game design thinking applied
            to product strategy.
          </li>
        </ul>
        <h2>Elsewhere</h2>
        <ul>
          <li>
            LinkedIn:{" "}
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/tuliosoria
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href={site.github} target="_blank" rel="noreferrer">
              github.com/tuliosoria
            </a>
          </li>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
