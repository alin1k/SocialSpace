import { UserPostsContextType } from "@/types/types";
import { createContext, useContext, useEffect } from "react";

export const UserPostsContext = createContext<UserPostsContextType>([undefined, undefined]);

export const useUserPostsContext = ()=>{
  const [userPosts, setUserPosts] = useContext(UserPostsContext);

  if(userPosts === undefined){
    throw new Error("userComments must be defined")
  }

  if(setUserPosts === undefined){
    throw new Error("setuserComments must be defined")
  }

  useEffect(()=>{
    localStorage.setItem('userPosts', JSON.stringify(userPosts));
  }, [userPosts])

  return {userPosts, setUserPosts};
}