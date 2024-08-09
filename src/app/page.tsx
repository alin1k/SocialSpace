import Post from "@/components/Post";
import { PostType } from "@/types/types";

async function getPosts(){

  try {
    const res = await fetch("https://dummyjson.com/posts?limit=10");
    if(res.status !== 200) throw new Error("Something went wrong!");

    await new Promise(resolve => setTimeout(resolve, 2000))
    return res.json();
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {

  const {posts} = (await getPosts());
  
  return (
    <div className="w-full p-3 flex flex-col gap-5">
      {posts?.map((post : PostType) => 
        <Post post={post} key={post.id} />
      )}
    </div>
  );
}
