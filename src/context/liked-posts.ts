import { LikedPostsContextType } from "@/types/types";
import { createContext, useContext } from "react";

export const LikedPostsContext = createContext<LikedPostsContextType>([undefined, undefined])

export function useLikedPostsContext(){
  const [likedPosts, setLikedPosts] = useContext(LikedPostsContext);

  if(likedPosts === undefined){
    throw new Error("likedPosts must be defined")
  }

  if(setLikedPosts === undefined){
    throw new Error("setLikedPosts must be defined")
  }

  return {likedPosts, setLikedPosts};
}