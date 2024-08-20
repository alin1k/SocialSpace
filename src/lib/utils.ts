import { PostType } from "@/types/types"

export const isSearchParamsEmpty = (searchParams: {tags? : string, search? : string}) : boolean =>{
  return (
    searchParams &&
    Object.keys(searchParams).length === 0
  )
}

export const isPostLiked = (posts: PostType[], postId : number ) : boolean =>{
  let ok = false;

  for(const post of posts){
    if(post.id === postId){
      ok = true;
      break;
    }
  }

  return ok;
}