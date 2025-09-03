// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomad AI - AI Training & Consultation",
  description:
    "Empower your business with expert-led AI training and consultation services.",
  icons: {
    // standard favicon for most browsers + Google
    icon: "/favicon.ico",
    // “shortcut icon” rel (older IE / some crawlers)
    shortcut: "/favicon-32x32.png",
    // apple touch icon
    apple: "/apple-touch-icon.png",
    // you can even point browsers at a web manifest if you have one
    // manifest: "/site.webmanifest",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* In case you want explicit control beyond metadata.icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
