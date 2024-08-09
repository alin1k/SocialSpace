import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

type PostType = {
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

export default function Post({post} : {post:PostType}){
  return(
    <div className="w-full border p-2 px-3 rounded-xl">
      
      <div className="flex flex-row content-center flex-wrap gap-1 mb-2">
        <AccountCircleOutlinedIcon/>
        <p className='font-semibold'>user{post.userId}</p>
      </div>

      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p>{post.body}</p>

      <div className="flex flex-row content-center flex-wrap gap-2 mt-2">
        {post.tags.map((tag,index)=>
          <p key={post.id.toString() + index.toString()} className="px-1 bg-primary-light text-sm">#{tag}</p>
        )}
      </div>
      
      <div className="flex flex-row gap-4">
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          <FavoriteBorderOutlinedIcon/>
          <p className="">{post.reactions.likes}</p>
        </div>
        <div className="flex flex-row content-center gap-1 flex-wrap mt-2">
          <RemoveRedEyeOutlinedIcon/>
          <p className="">{post.views}</p>
        </div>
      </div>

      
    </div>
  )
}