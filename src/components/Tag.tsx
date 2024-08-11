import Link from "next/link"

export default function Tag({children, className} : {children: string, className?: string}) {
  return (
    <Link href={`/posts?tags=${children}`} className={`px-1 bg-primary-light hover:shadow-md ${className}`}>#{children}</Link>
  )
}