import LikedPostsProvider from "./LikedPostsProvider";
import UserCommentsProvider from "./UserCommentsProvider";
import UserPostsProvider from "./UserPostsProvider";

export default function ContextProviders({children} : {children : React.ReactNode}) {
  return (
    <UserPostsProvider>
      <UserCommentsProvider>
        <LikedPostsProvider>
          {children}
        </LikedPostsProvider>
      </UserCommentsProvider>
    </UserPostsProvider>
  )
}