'use client'

import Comment from "@/components/Comment"
import { useUserCommentsContext } from "@/context/comments"
import Image from "next/image";

export default function CommentsPage() {

  const {userComments} = useUserCommentsContext();

  if(userComments.length === 0) return <Empty/>

  return (
    <div className="flex flex-col gap-4 mt-3">
      {userComments.map((comment, index)=>
        <Comment onProfile comment={comment} key={`comment${comment.id + index}`}/>
      )}
    </div>
  )
}

function Empty(){
  return(
    <div className="w-full flex flex-col items-center">
      <h1 className="text-xl font-semibold">You have no comments :(</h1>
      <Image src={'/no-comments.svg'} alt="No liked posts ilustration" priority={true} width={100} height={100} className="mt-16 w-3/5 h-auto"/>
    </div>
  )
}

