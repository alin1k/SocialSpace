import { Dispatch, SetStateAction } from "react"

type Props = {
  titleInputValue: string,
  setTitleInputValue: Dispatch<SetStateAction<string>>
}

export default function TitleInput({titleInputValue, setTitleInputValue} : Props) {
  return (
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
  )
}

