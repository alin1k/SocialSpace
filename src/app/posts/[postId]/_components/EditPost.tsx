import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { toast } from "sonner";
import AddedTags from "@/components/AddedTags";
import { PostType } from "@/types/types";
import { useUserPostsContext } from "@/context/user-posts";
import { useLikedPostsContext } from "@/context/liked-posts";
import { isPostLiked } from "@/lib/utils";

type Props = {
  post: PostType,
  setEditState: Dispatch<SetStateAction<boolean>>
}

export default function EditPost({post, setEditState} : Props) {

  const {title, body, tags} = post;

  const {setUserPosts} = useUserPostsContext();

  const [titleInputValue, setTitleInputValue] = useState(title);
  useEffect(()=>{
    setTitleInputValue(title);
  }, [title])

  const [bodyInputValue, setBodyInputValue] = useState(body);
  useEffect(()=>{
    setBodyInputValue(body);
  }, [body]);

  const [addedTags, setAddedTags] = useState(tags);
  useEffect(()=>{
    setAddedTags(tags)
  }, [tags]);

  const {likedPosts, setLikedPosts} = useLikedPostsContext();

  const addTag = ()=>{
    if(addedTags.length === 3) toast.error("Tag limit reached", {duration: 1000})
    setAddedTags(prev=>{
      if(prev.length < 3) return [...prev, '']
      return prev
    })
  }

  const updatePost = ()=>{
    if(titleInputValue.length === 0){
      toast.error("Title should not be empty");
      return
    }
    if(bodyInputValue.length === 0){
      toast.error("Post body should not be empty");
      return
    }
    toast.success("Post edited");
    setEditState(false)
    const newPost : PostType = {
      ...post, 
      title: titleInputValue, 
      body: bodyInputValue, 
      tags: addedTags.filter(tag=> tag.length)
    }
    setUserPosts(prev=> prev?.map((userPost)=> userPost.id === post.id? newPost : userPost))

    if(isPostLiked(likedPosts, post.id)){
      setLikedPosts(prev=> prev?.map(likedPost => likedPost.id === post.id? newPost : likedPost))
    }
  }

  return (
    <div>
      <div className="border rounded-xl">
        <input 
          value={titleInputValue}
          onChange={(e)=>{
            e.preventDefault();
            setTitleInputValue(e.target.value);
          }}
          type="text" 
          autoComplete='off' 
          className="mt-1 w-full px-2 mt-2 text-xl font-semibold focus:outline-none" 
          placeholder="Title"
        />
        <textarea 
          value={bodyInputValue}
          onChange={(e)=>{
            e.preventDefault();
            setBodyInputValue(e.target.value);
          }}
          className="mt-1 w-full px-2 resize-none focus:outline-none" 
          placeholder="Write what's on your mind..." 
          rows={3} 
        />

        <hr />

        <AddedTags addedTags={addedTags} setAddedTags={setAddedTags}/>

        <button 
          onClick={addTag}
          className='m-2 p-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full font-light'
        >
          <LocalOfferIcon className='size-4 text-gray-300'/> Add Tag
        </button>

      </div>
      <button 
        className="p-1 px-2 mt-2 bg-primary hover:bg-primary-hover rounded-xl"
        onClick={updatePost}
      >
        Confirm edit
      </button>
      <button 
        className="p-1 px-2 mt-2 bg-red-300 hover:bg-red-500 rounded-xl ms-2"
        onClick={()=>{setEditState(false)}}
      >
        Cancel
      </button>
    </div>
  )
}

