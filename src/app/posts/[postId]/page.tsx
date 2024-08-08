import { notFound } from "next/navigation"
import { Metadata } from "next";

type Props = {
  params: { postId: string }
}

export const generateMetadata = ({params} : Props) : Metadata => {
  return {
    title: `Post ${params.postId}`
  }
}

export default function PostById({params} : Props) {
  if(parseInt(params.postId) > 100){
    notFound();
  }

  return(
    <h1>Post {params.postId}</h1>
  )
}