"use client"

import { useState, useEffect } from "react";
import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUserCommentsContext } from "@/context/comments";


export default function Comment({comment} : {comment: CommentType}) {

  const [isClient, setIsClient] = useState(false);
  useEffect(()=>{
    setIsClient(true);
  }, []);

  const userId = 121212;

  const {setUserComments} = useUserCommentsContext();

  const handleDeleteComment = ()=>{
    // setUserComments(prev=> {
    //   let currentComments = prev ?? [];
    //   return currentComments.filter((comm) => comm.user.id !== userId);
    // })
    console.log('deleting comment');
  }

  return (
    <div className="p-2 border rounded-xl">
      <div className="flex justify-between">
        <div>
          {isClient && <AccountCircleOutlinedIcon className="inline size-6"/>}
          <p className="font-semibold inline ms-1">{comment.user.username}</p>
        </div>
        {(isClient && userId == comment.user.id )&& <DeleteIcon onClick={handleDeleteComment} className="p-1 hover:cursor-pointer hover:bg-gray-100 rounded-xl"/>}
      </div>
      <p>{comment.body}</p>
      {isClient && <FavoriteBorderOutlinedIcon className="size-4 inline"/>}
      <p className="inline ms-1 text-xs">{comment.likes}</p>
    </div>
  )
}
