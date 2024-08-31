import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-1/2 bg-primary rounded-t-full pt-4 text-center">
          <p className="text-primary-light text-3xl -mb-4">Oops !</p>
          <p className="font-bold text-[7rem] text-white">404</p>
        </div>
        <p className="text-center text-lg text-gray-400 mt-2">The post you are looking for was not found :( </p>
        <Link href="/" className="text-primary-dark p-1 px-2 hover:bg-gray-100 rounded-full">← Go back home</Link>
      </div>
    </div>
  )
}

