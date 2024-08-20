"use client"

import { useEffect, useState } from "react";
import { LikedPostsContext } from "@/context/liked-posts";
import { PostType } from "@/types/types";

export default function LikedPostsProvider({children} : {children: React.ReactNode}) {

  const [likedPosts, setLikedPosts] = useState<PostType[] | undefined>([])

  useEffect(()=>{

    const localStorageLiked = localStorage.getItem("likedPosts")
    if(localStorageLiked){
      const liked : PostType[] = JSON.parse(localStorageLiked)
      setLikedPosts(liked)
    }
    
  }, [])

  return (
    <LikedPostsContext.Provider value={[likedPosts, setLikedPosts]}>
      {children}
    </LikedPostsContext.Provider>
  )
}

