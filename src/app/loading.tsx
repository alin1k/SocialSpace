import PostLoading from "@/components/PostLoading";

export default function HomeLoading(){
  return(
    <div className="w-full p-3 flex flex-col gap-5">
      <PostLoading/>
      <PostLoading/>
      <PostLoading/>
    </div>
  )
}