import { Metadata } from "next"
import TagList from "./components/TagList"

export const metadata : Metadata = {
  title: "Posts"
}

const getAllTags = async ()=>{
  const res = await fetch('https://dummyjson.com/posts/tag-list', {
    cache: 'no-store'
  })

  await new Promise(resolve => setTimeout(resolve, 1000))
  return res.json();
}

export default async function Posts(){

  const tags = await getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Search for posts</h1>

      <div className="border rounded-xl p-3 mt-3">
        <p className="text-lg">Search posts by tags #</p>
        <TagList tags={tags} /> 
      </div>
    </div>
  )
}