import { useState } from "react";
import { toast } from "sonner";

export default function useAddedTags(tags : string[]){
  const [addedTags, setAddedTags] = useState(tags);

  const addTag = ()=>{
    if(addedTags.length === 3) toast.error("Tag limit reached", {duration: 1000})
    setAddedTags(prev=>{
      if(prev.length < 3) return [...prev, '']
      return prev
    })
  }

  return {addedTags, setAddedTags, addTag}
}