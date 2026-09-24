import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/site";

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
      className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
          <header className="flex items-center justify-between border-b border-neutral-200 py-5 dark:border-neutral-800">
            <Link href="/" className="text-lg font-bold tracking-tight">
              {site.name}
            </Link>
            <nav className="flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <ThemeToggle />
            </nav>
          </header>
          <main className="flex-1 py-10">{children}</main>
          <footer className="border-t border-neutral-200 py-6 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p>© {new Date().getFullYear()} {site.name}</p>
              <div className="flex gap-4">
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <a href={site.github} target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub
                </a>
                <a href={`mailto:${site.email}`} className="hover:underline">
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
