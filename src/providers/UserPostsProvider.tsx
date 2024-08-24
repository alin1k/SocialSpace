'use client'

import { UserPostsContext } from "@/context/user-posts"
import { PostType } from "@/types/types"
import React, { useEffect, useState } from "react"

export default function UserPostsProvider({children} : {children: React.ReactNode}) {
  const [userPosts, setUserPosts] = useState<PostType[] | undefined>([])

  useEffect(()=>{
    const localStoragePosts = localStorage.getItem("userPosts")
    if(localStoragePosts){
      const posts : PostType[] = JSON.parse(localStoragePosts)
      setUserPosts(posts)
    }
  }, [])

  return ( 
    <UserPostsContext.Provider value={[userPosts, setUserPosts]}>
      {children}
    </UserPostsContext.Provider>
  )
}

