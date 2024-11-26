import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistMono = localFont({
  src: "./fonts/MonoLisa-Regular.woff2",
  // src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhar Savaliya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased dark`}>
        <main className="max-w-4xl mx-auto py-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
