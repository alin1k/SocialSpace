import { Metadata } from "next";
import { CommentType, PostType } from "@/types/types";
import PostBody from "./components/PostBody";
import { 
  getPostById,
  getPostCommentsById
} from "@/lib/actions";

type Props = {
  params: { postId: string }
}

export const generateMetadata = ({params} : Props) : Metadata => {
  return {
    title: `Post ${params.postId}`
  }
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