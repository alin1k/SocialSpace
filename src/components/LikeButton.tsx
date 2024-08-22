"use client"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PostType } from '@/types/types';
import useLikeButton from '@/hooks/useLikeButton';

export default function LikeButton({post} : {post: PostType}) {

  const {liked, handleClick} = useLikeButton(post);

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

