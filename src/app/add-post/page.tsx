'use client'

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react'

export default function AddPostPage() {

  const [addedTags, setAddedTags] = useState<string[]>([]);

  return (
    <div className="border rounded-xl">
      <input type="text" autoComplete='off' className="mt-1 w-full rounded-xl px-2 pt-2 text-xl font-semibold border-none focus:outline-none" placeholder="Title"/>
      <textarea className="mt-1 w-full border-none rounded-xl px-2 resize-none focus:outline-none" placeholder="Write what's on your mind..." rows={3}></textarea>
      {addedTags.length ? (
        <div className="flex flex-row p-2 gap-2">
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
      ) : 
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
        <button className='p-1 px-2 bg-primary hover:bg-primary-hover rounded-lg'>Add Post</button>
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
