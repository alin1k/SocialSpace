import { useUserCommentsContext } from "@/context/comments";
import { useState, useEffect } from "react";
import { CommentType, PostType } from "@/types/types";

export default function useCurrentPostUserComments(postId: number){
  const {userComments} = useUserCommentsContext();

  const [currentPostUserComments, setCurrentPostUserComments] = useState<CommentType[]>([]);

  useEffect(()=>{
    setCurrentPostUserComments(userComments.filter(comment => comment.postId === postId))
  }, [userComments]);

  return currentPostUserComments;
}