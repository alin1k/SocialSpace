'use client'

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useState } from 'react'
import useAddPost from '@/hooks/useAddPost';
import TitleInput from './_components/TitleInput';
import PostBodyInput from './_components/PostBodyInput';
import AddedTags from './_components/AddedTags';
import { toast } from 'sonner';

export default function AddPostPage() {

  const [addedTags, setAddedTags] = useState<string[]>([]);
  const [titleInputValue, setTitleInputValue] = useState('');
  const [bodyInputValue, setBodyInputValue] = useState('');

  const addPost = useAddPost(titleInputValue, bodyInputValue, addedTags);

  const addTag = ()=>{
    if(addedTags.length === 3) toast.error("Tag limit reached", {duration: 1000})
    setAddedTags(prev=>{
      if(prev.length < 3) return [...prev, '']
      return prev
    })
  }

  return (
    <div className="border rounded-xl">
      <TitleInput titleInputValue={titleInputValue} setTitleInputValue={setTitleInputValue}/>
      <PostBodyInput bodyInputValue={bodyInputValue} setBodyInputValue={setBodyInputValue}/>

      <AddedTags addedTags={addedTags} setAddedTags={setAddedTags}/>

      <button 
        onClick={addTag}
        className='m-2 p-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full font-light'
      >
        <LocalOfferIcon className='size-4 text-gray-300'/> Add Tag
      </button>

      <div className="flex flex-row justify-between p-2 border-t">
        <div>
          <AccountCircleOutlined/>
          <p className="font-semibold inline ms-1">guest</p>
        </div>
        <button 
          onClick={addPost}
          className='p-1 px-2 bg-primary hover:bg-primary-hover rounded-lg'
        >
          Add Post
        </button>
      </div>
    </div>
  )
}
