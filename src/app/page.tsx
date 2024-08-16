import Post from "@/components/Post";
import { PostType } from "@/types/types";
import Link from "next/link";
import { getPosts } from "@/lib/actions";

export default async function Home() {

  const {posts} : {posts : PostType[]} = (await getPosts());
  
  return (
    <div className="py-2 flex flex-col gap-5">
      {posts?.map((post : PostType) => 
        <Post post={post} key={post.id} />
      )}

      <Link href={"/posts"} className="text-center hover:text-primary-dark">See more...</Link>
    </div>
  );
}
