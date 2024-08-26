import { useUserPostsContext } from "@/context/user-posts";
import { PostType } from "@/types/types";
import generateUniqueId from "generate-unique-id";
import { useRouter } from "next/navigation";

export default function useAddPost(titleInputValue: string, bodyInputValue: string, addedTags: string[]){
  const {setUserPosts} = useUserPostsContext();

  const router = useRouter();

  function addPost(){

    if(titleInputValue.length === 0 || bodyInputValue.length === 0) return;

    const post : PostType = {
      id: parseInt(generateUniqueId({length: 10,useLetters: false, })),
      title: titleInputValue,
      body: bodyInputValue,
      tags: addedTags,
      reactions: {
        likes: 0,
        dislikes: 0
      },
      views: 0,
      userId: 121212
    }

    setUserPosts(prev => {
      const currentUserPosts = prev ?? [];
      return [...currentUserPosts, post]
    })

    router.replace('/profile');
  }

  return addPost
}