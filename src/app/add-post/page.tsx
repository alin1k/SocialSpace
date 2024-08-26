'use client'

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react'
import { useUserPostsContext } from '@/context/user-posts';
import { PostType } from '@/types/types';
import generateUniqueId from 'generate-unique-id';
import { useRouter } from 'next/navigation';

export default function AddPostPage() {

  const [addedTags, setAddedTags] = useState<string[]>([]);

  const [titleInputValue, setTitleInputValue] = useState('');
  const [bodyInputValue, setBodyInputValue] = useState('');

  const {setUserPosts} = useUserPostsContext();

  const router = useRouter();

  function addPost(){

    if(titleInputValue.length === 0 || bodyInputValue.length === 0) return;

    const post : PostType = {
      id: parseInt(generateUniqueId({length: 10,useLetters: false, })),
      title: titleInputValue,
      body: bodyInputValue,
      tags: addedTags,
      reactions: {
        likes: 0,
        dislikes: 0
      },
      views: 0,
      userId: 121212
    }

    setUserPosts(prev => {
      const currentUserPosts = prev ?? [];
      return [...currentUserPosts, post]
    })

    router.replace('/profile');
  }

  return (
    <div className="border rounded-xl">
      <input 
        value={titleInputValue}
        onChange={(e)=>{
          e.preventDefault();
          setTitleInputValue(e.target.value);
        }}
        type="text" 
        autoComplete='off' 
        className="mt-1 w-full rounded-xl px-2 pt-2 text-xl font-semibold border-none focus:outline-none" 
        placeholder="Title"
      />
      <textarea 
        value={bodyInputValue}
        onChange={(e)=>{
          e.preventDefault();
          setBodyInputValue(e.target.value);
        }}
        className="mt-1 w-full border-none rounded-xl px-2 resize-none focus:outline-none" 
        placeholder="Write what's on your mind..." 
        rows={3} 
      />
      {addedTags.length ? (
        <div className="flex flex-row flex-wrap p-2 gap-2">
          {addedTags.map((tag, index)=>
            <Tag 
              key={index}
              initialValue={tag}
              updateTagInList={(input: string)=>{
                setAddedTags(prev=>
                  prev.map((tag, tagIndex) => tagIndex===index? input : tag)
                )
              }} 
              deleteTag={()=>{
                console.log(index)
                setAddedTags(prev=> prev.filter((tag, tagIndex)=> tagIndex !== index))
              }}
            />
          )}
        </div>
      ) 
      : 
        <></>
      }
      <button 
        onClick={()=>{
          setAddedTags(prev=>{
            if(prev.length < 3) return [...prev, '']
            return prev
          })
        }}
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

function Tag({initialValue, deleteTag, updateTagInList} : {initialValue: string, deleteTag: ()=>void, updateTagInList: (input:string)=>void}){

  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(()=>{
    setInputValue(initialValue);
  }, [initialValue])

  return(
    <div className="px-1 bg-primary-light flex">
      <input 
        value={inputValue}
        onChange={e=>{
          e.preventDefault();
          const newInputValue = e.target.value
          if(newInputValue.length < 10) {
            updateTagInList(newInputValue)
            setInputValue(newInputValue);
          }
        }}
        className='bg-primary-light rodunded-0 w-24 focus:outline-0'
      />
      <button className='ps-2' onClick={deleteTag}>x</button>
    </div>
  )
}
