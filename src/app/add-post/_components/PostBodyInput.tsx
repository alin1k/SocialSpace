import { Dispatch, SetStateAction } from "react"

type Props = {
  bodyInputValue: string,
  setBodyInputValue: Dispatch<SetStateAction<string>>
}

export default function PostBodyInput({bodyInputValue, setBodyInputValue} : Props) {
  return (
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
  )
}