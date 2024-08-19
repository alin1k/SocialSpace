import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import LikedPostsProvider from "@/components/LikedPostsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocialSpace",
  description: "Your social media app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} h-full antialiased relative`}>
        <LikedPostsProvider>
          <main className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="w-full p-3 sm:px-8 md:px-20 lg:px-40 xl:px-64 2xl:px-96 flex-grow flex-1">{children}</div>
            <Footer/>
          </main>
        </LikedPostsProvider>
      </body>
    </html>
  );
}
