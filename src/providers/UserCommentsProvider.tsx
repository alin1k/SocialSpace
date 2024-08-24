'use client'

import { UserCommentsContext } from "@/context/comments"
import { CommentType } from "@/types/types"
import { useState, useEffect } from "react"

export default function UserCommentsProvider({children} : {children: React.ReactNode}) {

  const [userComments, setUserComments] = useState<CommentType[] | undefined>([])

  useEffect(()=>{
    const localStorageComments = localStorage.getItem("userComments")
    if(localStorageComments){
      const comments : CommentType[] = JSON.parse(localStorageComments)
      setUserComments(comments)
    }
  }, [])

  return ( 
    <UserCommentsContext.Provider value={[userComments, setUserComments]}>
      {children}
    </UserCommentsContext.Provider>
  )
}
