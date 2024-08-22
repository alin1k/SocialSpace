import { useUserCommentsContext } from "@/context/comments";
import { useState, useEffect } from "react";
import { CommentType, PostType } from "@/types/types";

export default function useCurrentPostUserComments(post: PostType){
  const {userComments} = useUserCommentsContext();

  const [currentPostUserComments, setCurrentPostUserComments] = useState<CommentType[]>([]);

  useEffect(()=>{
    setCurrentPostUserComments(prev=> userComments.filter(comment => comment.postId === post.id))
  }, [userComments]);

  return currentPostUserComments;
}