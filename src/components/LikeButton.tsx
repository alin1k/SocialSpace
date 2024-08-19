"use client"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { PostType } from '@/types/types';
import {useLikedPostsContext } from '@/context/liked-posts';



export default function LikeButton({post} : {post: PostType}) {

  const {likedPosts, setLikedPosts} = useLikedPostsContext()
  const [liked, setLiked] = useState(false);

  useEffect(()=>{
    setLiked(likedPosts.includes(post.id.toString()));
  }, [likedPosts])

  function handleClick(){
    setLikedPosts(prev =>{
      const currentLikedPosts = prev ?? [];
      if(currentLikedPosts.includes(post.id.toString())){
        return currentLikedPosts.filter((postId) => postId !== post.id.toString())
      }

      return [...currentLikedPosts, post.id.toString()]
    } 
    )
  }

  return (
    <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
      {liked ? 
        <FavoriteIcon onClick={handleClick} className='fill-red-500 hover:cursor-pointer hover:scale-125'/>
        :
        <FavoriteBorderOutlinedIcon onClick={handleClick} className='hover:fill-red-500 hover:cursor-pointer hover:scale-125 transition-none'/>
      }
      <p className="">{liked? post.reactions.likes + 1 :post.reactions.likes}</p>
    </div>
  )
}

