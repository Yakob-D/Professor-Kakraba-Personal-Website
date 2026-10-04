import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ThemeScript } from "./components/layout/ThemeScript";
import { profile, siteMeta } from "./data/site";

/* Google's own type family, as used across google.com and antigravity.google:
   Google Sans Flex for body copy, Google Sans for display headings, and
   Google Sans Code for the monospace eyebrows and figures.

   Self-hosted via next/font/local (each file is the latin-subset variable
   woff2 pulled from Google's own CDN) rather than next/font/google: this
   Next.js version's Turbopack build fails to resolve next/font/google's
   internal fetch module ("Can't resolve '@vercel/turbopack-next/.../font'"),
   a bug that reproduces even for the stock Geist font from create-next-app.
   Self-hosting sidesteps it entirely and removes the network dependency. */
const googleSansFlex = localFont({
  src: "./fonts/GoogleSansFlex-Variable.woff2",
  variable: "--font-google-sans-flex",
  weight: "1 1000",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

const googleSans = localFont({
  src: "./fonts/GoogleSans-Variable.woff2",
  variable: "--font-google-sans",
  weight: "400 700",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

const googleSansCode = localFont({
  src: "./fonts/GoogleSansCode-Variable.woff2",
  variable: "--font-google-sans-code",
  weight: "300 800",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.title} — ${profile.titles[0]}`,
    template: `%s — ${siteMeta.title}`,
  },
  description: siteMeta.description,
  authors: [{ name: profile.displayName, url: siteMeta.url }],
  creator: profile.displayName,
  keywords: [
    "Samuel Kakraba",
    "biostatistics",
    "data science",
    "explainable AI",
    "public health AI",
    "Tulane University",
    "bioinformatics",
    "graph theory",
    "drug discovery",
    "Ghana",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: siteMeta.title,
    title: `${siteMeta.title} — ${profile.titles[0]}`,
    description: siteMeta.description,
    url: siteMeta.url,
    locale: siteMeta.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${googleSansFlex.variable} ${googleSans.variable} ${googleSansCode.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
