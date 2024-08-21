"use client"

import { useLikedPostsContext } from "@/context/liked-posts"
import Post from "@/components/Post"
import Image from "next/image"

export default function LikedPosts() {

  const {likedPosts} = useLikedPostsContext()

  if(likedPosts.length === 0) return <Empty/>

  return (
    <div className="py-2 flex flex-col gap-5">
      {likedPosts.map((post) => 
        <Post post={post} key={post.id} />
      )}
    </div>
  )
}

function Empty(){
  return(
    <div className="w-full flex flex-col items-center">
      <h1 className="text-xl font-semibold">You have no liked posts :(</h1>
      <Image src={'/no-liked.svg'} alt="No liked posts ilustration" priority={true} width={100} height={100} className="mt-16 w-2/3 h-auto"/>
    </div>
  )
}

