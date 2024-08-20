'use client'

import Comment from "@/components/Comment"
import { useUserCommentsContext } from "@/context/comments"

export default function CommentsPage() {

  const {userComments} = useUserCommentsContext();

  return (
    <div className="flex flex-col gap-4 mt-3">
      {userComments.map((comment, index)=>
        <Comment comment={comment} key={`comment${comment.id + index}`}/>
      )}
    </div>
  )
}

