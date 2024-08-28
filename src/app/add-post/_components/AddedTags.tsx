import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  addedTags: string[],
  setAddedTags: Dispatch<SetStateAction<string[]>>
}

export default function AddedTags({addedTags , setAddedTags} : Props) {

  if(addedTags.length === 0) return (<></>)

  return (
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
            setAddedTags(prev=> prev.filter((tag, tagIndex)=> tagIndex !== index))
          }}
        />
      )}
    </div>
  )
}

type TagProps = {
  initialValue: string, 
  deleteTag: ()=>void, 
  updateTagInList: (input:string)=>void
}

function Tag({initialValue, deleteTag, updateTagInList} : TagProps){

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
      <button className='' onClick={deleteTag}>
        <CloseIcon className="fill-gray-300 hover:fill-gray-500"/>
      </button>
    </div>
  )
}

