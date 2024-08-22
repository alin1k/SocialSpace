"use client"

import { PostType, CommentType } from "@/types/types";
import { useState} from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Comment from "../../../../components/Comment";
import { useRouter } from "next/navigation";
import Tag from "@/components/Tag";
import LikeButton from "@/components/LikeButton";
import { useUserCommentsContext } from "@/context/comments";
import generateUniqueId from "generate-unique-id";
import useIsClient from "@/hooks/useIsClient";
import useCurrentPostUserComments from "@/hooks/useCurrentPostUserComments";

export default function PostBody({post, comments} : {post: PostType, comments: CommentType[]}) {

  const isClient = useIsClient();
  const router = useRouter();

  const currentPostUserComments = useCurrentPostUserComments(post);

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
        {isClient && <LikeButton post={post}/>}
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          {isClient && <RemoveRedEyeOutlinedIcon/>}
          <p className="">{post.views}</p>
        </div>
      </div>

      <hr className="my-3"/>  

      <div className="inline">
        {isClient && <QuestionAnswerIcon className="size-10"/>}
      </div>
      <p className="ms-2 text-lg font-semibold inline">Comments: {comments.length + currentPostUserComments.length}</p>

      <div className="flex flex-col gap-4 mt-3">
        {comments.map((comment, index)=>
          <Comment comment={comment} key={`${post.id}comment${comment.id}`} />
        )}
        {currentPostUserComments.map((comment, index)=>
          <Comment comment={comment} key={`${post.id}comment${comment.id}`} />
        )}
      </div>

      <hr className="my-4"/>

      <AddCommentField post={post}/>

    </div>
  )
}

type AddCommentFieldProps = {
  post: PostType
}

function AddCommentField({post} : AddCommentFieldProps){

  const [inputValue, setInputValue] = useState('')
  const {setUserComments} = useUserCommentsContext();

  return(
    <>
      <p>Add comment</p>
      <div className="flex flex-row flex-nowrap">
        <input
          value={inputValue}
          onChange={(e)=>{
            e.preventDefault();
            setInputValue(e.target.value)
          }} 
          required 
          autoComplete="off" 
          type="text" 
          className="w-full px-2 py-1 rounded-e-none rounded-xl border"
        />
        <button 
          onClick={()=>{
            setUserComments(prev => {
              if(inputValue.length === 0) return prev;

              const currentComments = prev ?? [];
              const comment : CommentType = {
                id: parseInt(generateUniqueId({length: 10,useLetters: false, })),
                body: inputValue,
                postId: post.id,
                likes: 0,
                user: {
                  id: 121212,
                  username: 'guest',
                  fullName: 'Guest'
                }
              }
              return [...currentComments, comment];
            })
            setInputValue('');
          }}
          className="border rounded-s-none rounded-xl px-2 hover:bg-primary"
        >
          Add
        </button>
      </div>
    </>
  )
}