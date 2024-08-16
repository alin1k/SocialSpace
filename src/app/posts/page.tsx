import { Metadata } from "next"
import TagList from "./components/TagList"
import Post from "@/components/Post"
import { PostType } from "@/types/types"
import SearchField from "./components/SearchField"
import { 
  getAllTags, 
  getPostsByTag, 
  getPostsBySearchKeyword, 
  getSearchKeyword 
} from "@/lib/actions"
import { isSearchParamsEmpty } from "@/lib/utils"

export const metadata : Metadata = {
  title: "Posts"
}

const searchPosts = async (searchParams : {tags?: string | undefined, search?: string | undefined}) =>{
  if(isSearchParamsEmpty(searchParams)) return [];
  if(searchParams.tags) return await getPostsByTag(searchParams.tags);
  if(searchParams.search) return await getPostsBySearchKeyword(searchParams.search);
}

export default async function Posts({searchParams} : {searchParams: {tags?: string | undefined, search?: string}}){

  const tags : string[] = await getAllTags();
  const {posts} : {posts: PostType[]} = await searchPosts(searchParams);

  return (
    <div>
      {searchParams.tags? 
        <h1 className="text-2xl font-semibold text-center">Search for <span className="bg-primary-light p-1">#{searchParams.tags}</span> posts</h1> 
        :
        <h1 className="text-2xl font-semibold text-center">Search for posts</h1>
      }

      {isSearchParamsEmpty(searchParams)? 
        <div>
          <div className="border rounded-xl p-3 mt-3">
            <p className="text-lg">Search posts by tags #</p>
            <TagList tags={tags} /> 
          </div>
          <SearchField getSearchKeyword={getSearchKeyword}/>
        </div>
        :
        <></>
      }


      <hr className="my-5"/>

      {!isSearchParamsEmpty(searchParams) ? 
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