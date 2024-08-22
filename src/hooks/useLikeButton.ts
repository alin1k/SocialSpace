import { useState, useEffect } from "react";
import { useLikedPostsContext } from "@/context/liked-posts";
import { isPostLiked } from "@/lib/utils";
import { PostType } from "@/types/types";

export default function useLikeButton(post : PostType){
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

  return {liked, handleClick}
}