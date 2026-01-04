import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Media Clone",
  description: "A simple social feed built with Next.js and MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              <div className="mx-auto w-full max-w-5xl px-4 py-8">{children}</div>
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
