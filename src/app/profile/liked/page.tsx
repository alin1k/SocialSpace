"use client"

import { useLikedPostsContext } from "@/context/liked-posts"
import Post from "@/components/Post"

export default function LikedPosts() {

  const {likedPosts} = useLikedPostsContext()

  return (
    <div className="py-2 flex flex-col gap-5">
      {likedPosts.map((post) => 
        <Post post={post} key={post.id} />
      )}
    </div>
  )
}

