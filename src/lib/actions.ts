"use server"

import { CommentType, PostType } from "@/types/types";
import { redirect, notFound } from "next/navigation"

export const getPosts = async () : Promise<PostType[]> =>{
  const res = await fetch("https://dummyjson.com/posts?limit=10", {
    cache: "no-store"
  });
  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

export const getPostById = async (postId: string) : Promise<PostType> =>{
  const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
    cache: "no-store"
  });
  
  if(res.status !== 200) notFound();

  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

export const getPostCommentsById= async (postId : string) : Promise<CommentType[] | any>=>{

  const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`, {
    cache: "no-store"
  });

  if(res.status !== 200) notFound();

  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

export const getAllTags = async () : Promise<string[]>=>{
  const res = await fetch('https://dummyjson.com/posts/tag-list', {
    cache: 'no-store'
  })

  return res.json();
}

export const getPostsByTag = async (tag : string)=>{
  const res = await fetch(`https://dummyjson.com/posts/tag/${tag}?limit=0`, {
    cache: 'no-store'
  })

  return res.json();
}

export const getSearchKeyword = async (formData: FormData)=>{
  const keyword = formData.get("search"); 
  redirect(`/posts/?search=${keyword}`)
}

export const getPostsBySearchKeyword = async (keyword: string)=>{
  const res = await fetch(`https://dummyjson.com/posts/search?q=${keyword}&limit=0`, {
    cache: 'no-store'
  }) 

  return res.json();
}
