import Link from "next/link"

function Navbar() {
  return (
    <header className="w-full flex flex-row justify-between content-center p-5 md:px-page border-b-2">
      <p className="bg-primary rounded-2xl p-2 font-semibold text-xl">SocialSpace</p>
      <div className="flex flex-row gap-4 justify-center content-center flex-wrap">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/posts" className="hover:text-primary">Posts</Link>
      </div>
    </header>
  )
}

export default Navbar