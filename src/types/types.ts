import { Dispatch, SetStateAction } from "react";

export type PostType = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number,
    dislikes: number,
  },
  views: number,
  userId: number
}

export type CommentType = {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string
  }
}

export type LikedPostsContextType = [
  likedPosts: string[] | undefined,
  setLikedPosts: Dispatch<SetStateAction<string[] | undefined>> | undefined
]