"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Nav() {

  const path = usePathname()

  return (
    <div className="flex my-3 border-b text-center">
      <Link href="/profile" className={`flex-1 border-e p-1 hover:bg-primary ${path === '/profile'? 'bg-primary-light' : ''}`}>My Posts</Link>
      <Link href="/profile/liked" className={`flex-1 border-e p-1 hover:bg-primary ${path === '/profile/liked'? 'bg-primary-light' : ''}`}>Liked Posts</Link>
      <Link href="/profile/comments" className={`flex-1 p-1 hover:bg-primary ${path === '/profile/comments'? 'bg-primary-light' : ''}`}>My Comments</Link>
    </div>
  )
}

