"use client"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useEffect, useState } from 'react';
import { PostType } from '@/types/types';
import Link from 'next/link';
import Tag from './Tag';

export default function Post({post} : {post:PostType}){

  const [isClinet, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, [])

  return(
    <div className="w-full border p-3 rounded-xl">
      
      <div className="flex flex-row content-center flex-wrap justify-between mb-2">
        <div className="flex flex-row gap-2">
          {isClinet && <AccountCircleOutlinedIcon/>}
          <p className='font-semibold'>user{post.userId}</p>
        </div>
        <Link href={`/posts/${post.id}`} className='text-xs text-primary-dark p-1 px-2 hover:bg-gray-100 rounded-xl'>See post →</Link>
      </div>

      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p>{post.body}</p>

      <div className="flex flex-row content-center flex-wrap gap-2 mt-2">
        {post.tags.map((tag,index)=>
          <Tag key={post.id.toString() + "tag" + index.toString()} className="text-sm">{tag}</Tag>
        )}
      </div>
      
      <div className="flex flex-row gap-4">
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          {isClinet && <FavoriteBorderOutlinedIcon/>}
          <p className="">{post.reactions.likes}</p>
        </div>
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          {isClinet && <RemoveRedEyeOutlinedIcon/>}
          <p className="">{post.views}</p>
        </div>
      </div>
    </div>
  )
}