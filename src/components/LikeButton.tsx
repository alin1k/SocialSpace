"use client"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { PostType } from '@/types/types';
import { useLikedPostsContext } from '@/context/liked-posts';
import { isPostLiked } from '@/lib/utils';

export default function LikeButton({post} : {post: PostType}) {

  const {likedPosts, setLikedPosts} = useLikedPostsContext()
  const [liked, setLiked] = useState(false);

  useEffect(()=>{
    setLiked(isPostLiked(likedPosts, post.id));
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts])

  function handleClick(){
    setLikedPosts(prev =>{
      let currentLikedPosts = prev ?? [];
      if(isPostLiked(likedPosts, post.id)){
        return currentLikedPosts.filter((currentPost) => currentPost.id !== post.id)
      }

      return [...currentLikedPosts, post];
    })
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

