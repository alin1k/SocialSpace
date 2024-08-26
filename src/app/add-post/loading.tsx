export default function loading() {
  return (
    <div className="border rounded-xl animate-pulse">
      <div className="p-2">
        <div className="w-1/6 h-4 bg-gray-200 rounded-full"></div>
        <div className="w-4/6 h-2 mt-2 mb-8 bg-gray-200 rounded-full"></div>
      </div>
      
      <hr />

      <div className="py-1 p-2">
        <div className="w-1/5 h-4 my-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  )
}

