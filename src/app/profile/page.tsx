'use client'

import Post from "@/components/Post";
import { useUserPostsContext } from "@/context/user-posts"
import Image from "next/image"

export default function Profile() {

  const {userPosts} = useUserPostsContext();

  if(userPosts.length === 0 ) return <Empty/>

  return (
    <div className="py-2 flex flex-col gap-5">
      {userPosts.map((post, index)=>(
        <Post post={post}/>
      ))}
    </div>
  )
}

function Empty(){
  return(
    <div className="w-full flex flex-col items-center">
      <h1 className="text-xl font-semibold">You have no posts :(</h1>
      <Image src={'/no-posts.svg'} alt="No liked posts ilustration" priority={true} width={100} height={100} className="mt-16 w-3/5 h-auto"/>
    </div>
  )
}
