import Link from "next/link"

function Navbar() {
  return (
    <>
      <header className="w-full flex flex-row justify-between content-center p-3 sm:px-8 md:px-20 lg:px-40 xl:px-64 2xl:px-96">
        <p className="bg-primary rounded-2xl p-2 font-semibold text-xl">SocialSpace</p>
        <div className="flex flex-row gap-1 justify-center content-center flex-wrap">
          <Link href="/" className="hover:bg-gray-100 p-1 px-2 rounded-xl">Home</Link>
          <Link href="/posts" className="hover:bg-gray-100 p-1 px-2 rounded-xl">Posts</Link>
        </div>
      </header>
      <hr/>
    </>
  )
}

export default Navbar