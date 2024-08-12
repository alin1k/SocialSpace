import { Metadata } from "next"
import TagList from "./components/TagList"
import Post from "@/components/Post"
import { PostType } from "@/types/types"

export const metadata : Metadata = {
  title: "Posts"
}

const getAllTags = async ()=>{
  const res = await fetch('https://dummyjson.com/posts/tag-list', {
    cache: 'no-store'
  })

  return res.json();
}

const getPostsByTag = async (tag : string) =>{
  const res = await fetch(`https://dummyjson.com/posts/tag/${tag}?limit=0`, {
    cache: 'no-store'
  })

  return res.json();
}

export default async function Posts({searchParams} : {searchParams: {tags: string}}){

  const tags : string[] = await getAllTags();
  const {posts} : {posts: PostType[]} = await getPostsByTag(searchParams.tags);

  return (
    <div>
      {searchParams.tags? 
        <h1 className="text-2xl font-semibold text-center">Search for <span className="bg-primary-light p-1">#{searchParams.tags}</span> posts</h1> 
        : 
        <h1 className="text-2xl font-semibold text-center">Search for posts</h1>
      }

      <div className="border rounded-xl p-3 mt-3">
        <p className="text-lg">Search posts by tags #</p>
        <TagList tags={tags} /> 
      </div>

      <hr className="my-5"/>

      {posts && searchParams.tags ? 
        <h1 className="mb-5">Found {posts.length} posts</h1>
        :
        <></>
      }

      <div className="flex flex-col gap-5">
        {posts?.map((post : PostType) => 
          <Post post={post} key={post.id} />
        )}
      </div>
    </div>
  )
}