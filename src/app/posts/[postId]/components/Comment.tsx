"use client"

import { CommentType } from "@/types/types";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default function Comment({comment, isClient} : {comment: CommentType, isClient: boolean}) {
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
