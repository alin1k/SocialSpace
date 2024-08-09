import Post from "@/components/Post";
import { PostType } from "@/types/types";

async function getPosts(){
    const res = await fetch("https://dummyjson.com/posts?limit=10", {
      cache: "no-store"
    });
    await new Promise(resolve => setTimeout(resolve, 1000))
    return res.json();
  
}

export default async function Home() {

  const {posts} : {posts : PostType[]} = (await getPosts());
  
  return (
    <div className="w-full p-3 flex flex-col gap-5">
      {posts?.map((post : PostType) => 
        <Post post={post} key={post.id} />
      )}
    </div>
  );
}
