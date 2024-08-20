"use client"

import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState, useEffect } from "react";


export default function Comment({comment} : {comment: CommentType}) {

  const [isClient, setIsClient] = useState(false);
  useEffect(()=>{
    setIsClient(true);
  }, []);

  return (
    <div className="p-2 border rounded-xl">
      {isClient && <AccountCircleOutlinedIcon className="inline size-6"/>}
      <p className="font-semibold inline ms-1">{comment.user.username}</p>
      <p>{comment.body}</p>
      {isClient && <FavoriteBorderOutlinedIcon className="size-4 inline"/>}
      <p className="inline ms-1 text-xs">{comment.likes}</p>
    </div>
  )
}
