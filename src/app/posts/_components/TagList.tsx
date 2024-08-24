"use client"

import { useEffect, useState } from "react"
import Tag from "@/components/Tag"

export default function TagList({tags} : {tags: string[]}) {

  const [tagList, setTagList] = useState(tags.slice(0, 10))
  const [dropDown, setDropDown] = useState(false)

  useEffect(()=>{
    if(dropDown) setTagList(tags);
    else setTagList(tags.slice(0, 10))
  }, [dropDown])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap gap-2 mt-3">
        {tagList.map((tag : string, index: number)=>
          <div key={`tag${index}`} onClick={()=>setDropDown(prev => !prev? prev : !prev)}>
            <Tag>{tag}</Tag>
          </div>
        )}
      </div>
      <button className="mt-3 flex-start w-fit" onClick={()=>setDropDown(prev => !prev)}>{dropDown? 'See less' : 'See more...'}</button>
    </div>
    
  )
}
