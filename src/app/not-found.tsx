import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Page not Found"
  }
}

export default function NotFound(){
  return <h1>Page not found!</h1>
}