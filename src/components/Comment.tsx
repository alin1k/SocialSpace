"use client"

import { useState} from "react";
import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useUserCommentsContext } from "@/context/comments";
import EditButton from "./ui/EditButton";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import useIsClient from "@/hooks/useIsClient";
import { toast } from "sonner";


export default function Comment({comment, onProfile} : {comment: CommentType, onProfile?: true}) {

  const userId = 121212;

  const isClient = useIsClient();
  const {setUserComments} = useUserCommentsContext();

  const [editState, setEditState] = useState(false);

  const handleDeleteComment = ()=>{
    setUserComments(prev=> {
      let currentComments = prev ?? [];
      return currentComments.filter((comm) => comm.id !== comment.id);
    })
  }

  return (
    <div className="p-2 border rounded-xl relative">
      {(isClient && userId == comment.user.id )&& (
        <div className="absolute top-1 right-1">
          <EditButton deleteAction={handleDeleteComment} editAction={setEditState}/>
        </div>
      )}
      <div className="flex justify-between">
        <div>
          {isClient && <AccountCircleOutlinedIcon className="inline size-6"/>}
          <p className="font-semibold inline ms-1">{comment.user.username}</p>
        </div>
      </div>

      {editState?
        <EditComment comment={comment} setEditState={setEditState} setUserComments={setUserComments}/>
        :
        <>
          <p>{comment.body}</p>
          <div className="block">
            {isClient && <FavoriteBorderOutlinedIcon className="size-4 inline"/>}
            <p className="inline ms-1 text-xs">{comment.likes}</p>
          </div>
        </>
      }
      
      {onProfile && <Link href={`/posts/${comment.postId}`} className='text-xs text-primary-dark p-1 px-2 hover:bg-gray-100 rounded-xl'>See post →</Link>}
    </div>
  )
}

type EditCommentProps = {
  comment: CommentType, 
  setEditState: Dispatch<SetStateAction<boolean>>,
  setUserComments: Dispatch<SetStateAction<CommentType[] | undefined>>
}

function EditComment({comment, setEditState , setUserComments} : EditCommentProps){

  const [inputValue, setInputValue] = useState(comment.body);

  return (
    <div className="block mt-2">
      <input 
        placeholder="Edit your comment..."
        type="text" 
        value={inputValue} 
        onChange={(e)=>{
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        className="w-full rounded p-1 focus:outline-0"
      />

      <hr />
      <button 
        className="border p-1 px-2 mt-1 rounded-xl bg-primary hover:bg-primary-hover"
        onClick={()=>{
          if(inputValue.length === 0) return;

          toast.success("Comment edited");
          setEditState(false)
          setUserComments((prev)=>{
            let currentComments = prev ?? [];
            
            return currentComments.map((comm)=> comm.id===comment.id? {...comm, body: inputValue,} : comm);
          })
        }}
      >
        Confirm edit
      </button>
      <button 
        className="ms-3 border p-1 px-2 rounded-xl bg-red-300 hover:bg-red-500"
        onClick={()=> setEditState(false)}
      >
        Cancel
      </button>

    </div>
  )
}
