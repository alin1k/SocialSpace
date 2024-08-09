import Post from "@/components/Post";
import PostLoading from "@/components/PostLoading";

type PostType = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number,
    dislikes: number,
  },
  views: number,
  userId: number
}

const post : PostType  = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  tags: [
    "history",
    "american",
    "crime"
  ],
  reactions: {
    likes: 192,
    dislikes: 25
  },
  views: 305,
  userId: 121
}

export default function Home() {
  return (
    <div className="w-full p-3 flex flex-col gap-5">
      <Post post={post} />
      <PostLoading/>
    </div>
  );
}
