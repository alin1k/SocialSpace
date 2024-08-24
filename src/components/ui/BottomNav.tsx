'use client'

import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { usePathname } from "next/navigation";

export default function BottomNav() {

  const path = usePathname();

  return (
    <div>
      <div className="flex flex-row w-full fixed bottom-0 border-t bg-white shadow-2xl sm:px-8 md:px-20 lg:px-40 xl:px-64 2xl:px-96">
        <Link href={"/"} className={`flex-1 text-center py-3 hover:bg-primary-light`}>
          <HomeIcon className={`${path === '/'? 'fill-primary' : ''} size-8`}/>
        </Link>
        <Link href={"/posts"} className={`flex-1 text-center py-3 hover:bg-primary-light`}>
          <SearchIcon className={`${path === '/posts'? 'fill-primary' : ''} size-8`}/>
        </Link>
        <Link href={"/add-post"} className={`flex-1 text-center py-3 hover:bg-primary-light`}>
          <PostAddIcon className={`${path === '/add-post'? 'fill-primary' : ''} size-8`}/>
        </Link>
        <Link href={"/profile"} className={`flex-1 text-center py-3 hover:bg-primary-light`}>
          <AccountCircleIcon className={`${path === '/profile'? 'fill-primary' : ''} size-8`}/>
        </Link>
      </div>
    </div>
  )
}

