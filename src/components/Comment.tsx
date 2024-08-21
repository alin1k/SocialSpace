"use client"

import { useState, useEffect } from "react";
import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useUserCommentsContext } from "@/context/comments";
import EditButton from "./EditButton";
import { Dispatch, SetStateAction } from "react";


export default function Comment({comment} : {comment: CommentType}) {

  const [editState, setEditState] = useState(false);

  const [isClient, setIsClient] = useState(false);
  useEffect(()=>{
    setIsClient(true);
  }, []);

  const userId = 121212;

  const {userComments, setUserComments} = useUserCommentsContext();

  useEffect(()=>{
    localStorage.setItem('userComments', JSON.stringify(userComments));
  }, [userComments])

  const handleDeleteComment = ()=>{
    setUserComments(prev=> {
      let currentComments = prev ?? [];
      return currentComments.filter((comm) => comm.id !== comment.id);
    })
  }

  return (
    <div className="p-2 border rounded-xl">
      <div className="flex justify-between">
        <div>
          {isClient && <AccountCircleOutlinedIcon className="inline size-6"/>}
          <p className="font-semibold inline ms-1">{comment.user.username}</p>
        </div>
        {(isClient && userId == comment.user.id )&& <EditButton deleteAction={handleDeleteComment} editAction={setEditState}/>}
      </div>

      {editState?
        <EditComment comment={comment} setEditState={setEditState} setUserComments={setUserComments}/>
        :
        <p>{comment.body}</p>
      }
      
      {isClient && <FavoriteBorderOutlinedIcon className="size-4 inline"/>}
      <p className="inline ms-1 text-xs">{comment.likes}</p>
    </div>
  )
}

function EditComment({
  comment, setEditState , setUserComments
} : {
  comment: CommentType, 
  setEditState: Dispatch<SetStateAction<boolean>>,
  setUserComments: Dispatch<SetStateAction<CommentType[] | undefined>>
}){

  const [inputValue, setInputValue] = useState(comment.body);

  return (
    <div className="block">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e)=>{
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        className="w-full border rounded p-1"
      />
      <button 
        className="border p-1 px-2 mt-1 rounded hover:bg-primary"
        onClick={()=>{
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
        className="ms-3 border p-1 px-2 rounded bg-red-300 hover:bg-red-500"
        onClick={()=> setEditState(false)}
      >
        Cancel
      </button>

    </div>
  )
}
