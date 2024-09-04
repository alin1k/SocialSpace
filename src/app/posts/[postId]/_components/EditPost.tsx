import { Dispatch, SetStateAction } from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddedTags from "@/components/AddedTags";
import { PostType } from "@/types/types";
import useEditPost from "@/hooks/useEditPost";

type Props = {
  post: PostType,
  setEditState: Dispatch<SetStateAction<boolean>>
}

export default function EditPost({post, setEditState} : Props) {

  const { 
    titleInputValue, 
    setTitleInputValue, 
    bodyInputValue, 
    setBodyInputValue,
    addedTags,
    setAddedTags,
    addTag,
    updatePost
  } = useEditPost(post, setEditState);

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

