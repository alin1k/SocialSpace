import { UserCommentsContextType} from "@/types/types";
import { createContext, useContext } from "react";

export const UserCommentsContext = createContext<UserCommentsContextType>([undefined, undefined]);

export function useUserCommentsContext(){
  const [userComments, setUserComments] = useContext(UserCommentsContext);

  if(userComments === undefined){
    throw new Error("userComments must be defined")
  }

  if(setUserComments === undefined){
    throw new Error("setuserComments must be defined")
  }

  return {userComments, setUserComments};
}