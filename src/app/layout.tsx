import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const MonoFont = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
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
        <main className="max-w-4xl mx-auto py-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
