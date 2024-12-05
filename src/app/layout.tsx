import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@next/third-parties/google";

const MonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikharsavaliya.me"),
  title: {
    default: "Nikhar Savaliya",
    template: "%s | Nikhar Savaliya",
  },
  description: "Web Developer, Making some things.",
  openGraph: {
    title: "Nikhar Savaliya",
    description: "Web Developer, Making some things.",
    url: "https://nikharsavaliya.me",
    siteName: "Nikhar Savaliya",
    locale: "en_US",
    type: "website",
    images: [`/api/og?title=${encodeURIComponent("Nikhar Savaliya")}`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
  twitter: {
    title: "Nikhar Savaliya",
    card: "summary_large_image",
    description: "Web Developer, Making some things.",
    images: [`/api/og?title=${encodeURIComponent("Nikhar Savaliya")}`],
    creator: "@nikharx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MonoFont.variable} antialiased dark`}>
        <GoogleAnalytics gaId="G-BNN3H56CSK" />
        <main className="max-w-4xl mx-auto py-4">
          <NextTopLoader
            color="#939aa5"
            initialPosition={0.08}
            crawlSpeed={200}
            height={1.5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            zIndex={1600}
            showAtBottom={false}
          />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
