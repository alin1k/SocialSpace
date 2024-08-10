import { notFound } from "next/navigation"
import { Metadata } from "next";
import { CommentType, PostType } from "@/types/types";
import PostBody from "./components/PostBody";

type Props = {
  params: { postId: string }
}

export const generateMetadata = ({params} : Props) : Metadata => {
  return {
    title: `Post ${params.postId}`
  }
}

const getPostById = async (postId: string) =>{
  const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
    cache: "no-store"
  });
  
  if(res.status !== 200) notFound();

  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

const getPostCommentsById= async (postId : string)=>{

  const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`, {
    cache: "no-store"
  });

  if(res.status !== 200) notFound();

  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

export default async function PostById({params} : Props) {
  
  const post : PostType = await getPostById(params.postId);
  const {comments} : {comments: CommentType[]} = await getPostCommentsById(params.postId)

  return(
    <div className="w-full p-3">
      <PostBody post={post} comments={comments}/>
    </div>
  )
}