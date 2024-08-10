import React from 'react'

function LoadingPost() {
  return (
    <div className='w-full p-3 animate-pulse'>
      <div className="w-1/2 h-5 bg-gray-200 rounded-full"></div>

      <div className="w-full h-3 bg-gray-200 rounded-full mt-10"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>

      <div className="flex flex-row content-center flex-wrap gap-2 mt-2">
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
      </div>

      <hr className="my-3"/>

      <div className="w-1/3 h-5 bg-gray-200 rounded-full"></div>

      <div className="p-2 border rounded-xl mt-3">
        <div className="w-1/3 h-3 bg-gray-200 rounded-full mt-2"></div>
        <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
        <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      </div>
    </div>
  )
}

export default LoadingPost