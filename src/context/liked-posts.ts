import { LikedPostsContextType } from "@/types/types";
import { createContext, useContext, useEffect } from "react";

export const LikedPostsContext = createContext<LikedPostsContextType>([undefined, undefined])

export function useLikedPostsContext(){
  const [likedPosts, setLikedPosts] = useContext(LikedPostsContext);

  if(likedPosts === undefined){
    throw new Error("likedPosts must be defined")
  }

  if(setLikedPosts === undefined){
    throw new Error("setLikedPosts must be defined")
  }

  useEffect(()=>{
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts])

  return {likedPosts, setLikedPosts};
}