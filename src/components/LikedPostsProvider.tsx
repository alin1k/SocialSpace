"use client"

import { useEffect, useState } from "react";
import { LikedPostsContext } from "@/context/liked-posts";

export default function LikedPostsProvider({children} : {children: React.ReactNode}) {

  const [likedPosts, setLikedPosts] = useState<string[] | undefined>([])

  useEffect(()=>{

    const localStorageLiked = localStorage.getItem("likedPosts")
    if(localStorageLiked){
      const liked : string[] = JSON.parse(localStorageLiked)
      setLikedPosts(liked)
    }
    
  }, [])

  return (
    <LikedPostsContext.Provider value={[likedPosts, setLikedPosts]}>
      {children}
    </LikedPostsContext.Provider>
  )
}

