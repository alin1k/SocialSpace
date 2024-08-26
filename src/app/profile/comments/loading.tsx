import CommentLoading from "@/components/CommentLoading";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <CommentLoading/>
      <CommentLoading/>
      <CommentLoading/>
    </div>
  )
}

