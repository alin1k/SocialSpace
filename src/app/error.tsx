"use client"

import { useEffect } from "react"

export default function HomeError({error} : {error: Error}){

  useEffect(()=>{
    console.error(error)
  }, [error])

  return(
    <div className="w-full h-full text-center pt-5">
      <h1 className="text-xl font-bold text-red-500">An error occured while loading the page</h1>
    </div>
  )
}