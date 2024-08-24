import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import LikedPostsProvider from "@/providers/LikedPostsProvider";
import UserCommentsProvider from "@/providers/UserCommentsProvider";
import BottomNav from "@/components/ui/BottomNav";
import UserPostsProvider from "@/providers/UserPostsProvider";

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
        <UserPostsProvider>
          <UserCommentsProvider>
            <LikedPostsProvider>
              <main className="flex flex-col min-h-screen">
                <Navbar/>
                <div className="w-full p-3 sm:px-8 md:px-20 lg:px-40 xl:px-64 2xl:px-96 flex-grow flex-1 pb-24">{children}</div>
                {/* <Footer/> */}
                <BottomNav/>
              </main>
            </LikedPostsProvider>
          </UserCommentsProvider>
        </UserPostsProvider>
      </body>
    </html>
  );
}
