import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author }],
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
          <header className="flex items-center justify-between border-b border-line py-5">
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
              <span
                aria-hidden
                className="block h-2.5 w-2.5 bg-accent transition-transform duration-300 ease-out group-hover:rotate-45"
              />
              <span className="font-display text-xl font-semibold tracking-tight">
                {site.name}
              </span>
            </Link>
            <nav className="flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <ThemeToggle />
            </nav>
          </header>
          <main className="flex-1 py-12">{children}</main>
          <footer className="border-t border-line py-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                © {new Date().getFullYear()} {site.name}
              </p>
              <div className="flex gap-5 font-mono text-xs uppercase tracking-[0.18em]">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-soft transition-colors hover:text-accent"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
