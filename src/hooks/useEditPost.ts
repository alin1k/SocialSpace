import { useUserPostsContext } from "@/context/user-posts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useAddedTags from "./useAddedTags";
import { useLikedPostsContext } from "@/context/liked-posts";
import { toast } from "sonner";
import { isPostLiked } from "@/lib/utils";
import { PostType } from "@/types/types";

export default function useEditPost(post: PostType, setEditState: Dispatch<SetStateAction<boolean>>){

  const {title, body, tags} = post;
  
  const [titleInputValue, setTitleInputValue] = useState(title);
  const [bodyInputValue, setBodyInputValue] = useState(body);
  
  const {setUserPosts} = useUserPostsContext();
  const {addedTags, setAddedTags, addTag} = useAddedTags(tags);
  const {likedPosts, setLikedPosts} = useLikedPostsContext();

  const updatePost = ()=>{
    if(titleInputValue.length === 0){
      toast.error("Title should not be empty");
      return
    }
    if(bodyInputValue.length === 0){
      toast.error("Post body should not be empty");
      return
    }
    toast.success("Post edited");
    setEditState(false)
    const newPost : PostType = {
      ...post, 
      title: titleInputValue, 
      body: bodyInputValue, 
      tags: addedTags.filter(tag=> tag.length)
    }
    setUserPosts(prev=> prev?.map((userPost)=> userPost.id === post.id? newPost : userPost))

    if(isPostLiked(likedPosts, post.id)){
      setLikedPosts(prev=> prev?.map(likedPost => likedPost.id === post.id? newPost : likedPost))
    }
  }

  return {
    titleInputValue, 
    setTitleInputValue, 
    bodyInputValue, 
    setBodyInputValue,
    addedTags,
    setAddedTags,
    addTag,
    updatePost
  }
}