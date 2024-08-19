"use client"

import { useState } from "react";
import { LikedPostsContext } from "@/context/liked-posts";

export default function LikedPostsProvider({children} : {children: React.ReactNode}) {

  const [likedPosts, setLikedPosts] = useState<string[] | undefined>([])

  return (
    <LikedPostsContext.Provider value={[likedPosts, setLikedPosts]}>
      {children}
    </LikedPostsContext.Provider>
  )
}

