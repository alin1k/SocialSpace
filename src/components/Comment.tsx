"use client"

import { useState, useEffect } from "react";
import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useUserCommentsContext } from "@/context/comments";
import EditButton from "./EditButton";


export default function Comment({comment} : {comment: CommentType}) {

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
        {(isClient && userId == comment.user.id )&& <EditButton deleteAction={handleDeleteComment}/>}
      </div>
      <p>{comment.body}</p>
      {isClient && <FavoriteBorderOutlinedIcon className="size-4 inline"/>}
      <p className="inline ms-1 text-xs">{comment.likes}</p>
    </div>
  )
}
