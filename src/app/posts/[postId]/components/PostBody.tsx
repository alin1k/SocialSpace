"use client"

import { PostType, CommentType } from "@/types/types";
import { useState, useEffect } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Comment from "./Comment";
import { useRouter } from "next/navigation";
import Tag from "@/components/Tag";
import LikeButton from "@/components/LikeButton";

export default function PostBody({post, comments} : {post: PostType, comments: CommentType[]}) {

  const [isClinet, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    setIsClient(true);
  }, [])

  return (
    <div className="w-full">
      <button onClick={()=>router.back()} className="text-xs text-primary-dark p-1 px-2 hover:bg-gray-100 rounded-xl">← Go back</button>
      <p className="text-xl font-semibold leading-5 mt-5">{post.title}</p>
      <p>by user{post.userId}</p>
      <p className="mt-3">{post.body}</p>

      <div className="flex flex-row flex-wrap content-center gap-2 mt-3">
        <p>Tags:</p>
        {post.tags.map((tag, index)=>
          <Tag key={post.id.toString() + index.toString()}>{tag}</Tag>
        )}
      </div>

      <div className="flex flex-row gap-4 mt-3">
        {isClinet && <LikeButton post={post}/>}
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          {isClinet && <RemoveRedEyeOutlinedIcon/>}
          <p className="">{post.views}</p>
        </div>
      </div>

      <hr className="my-3"/>  

      <div className="inline">
        {isClinet && <QuestionAnswerIcon className="size-10"/>}
      </div>
      <p className="ms-2 text-lg font-semibold inline">Comments: {comments.length}</p>

      <div className="flex flex-col gap-4 mt-3">
        {comments.map((comment, index)=>
          <Comment comment={comment} key={`${post.id}comment${comment.id}`} isClient={isClinet} />
        )}
      </div>

    </div>
  )
}