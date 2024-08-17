"use client"

import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

export default function SearchField({getSearchKeyword} : {getSearchKeyword: (formData: FormData)=>Promise<never>}) {
  
  const [isClinet, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, [])
  
  return (
    <form action={getSearchKeyword} className="mt-3">
      {isClinet && <SearchIcon/>}
      <label htmlFor="search" className='text-lg'>Search posts by keyword</label>
      <div className="flex flex-row flex-nowrap">
        <input required autoComplete="off" id='search' type="text" className="mt-1 w-full border rounded-xl p-2 rounded-e-none" placeholder="ex: love" />
        <button className="mt-1 p-1 px-2 border rounded-xl hover:bg-primary rounded-s-none">Search</button>
      </div>
    </form>
  )
}
 