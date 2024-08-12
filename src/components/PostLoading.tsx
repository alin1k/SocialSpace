import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function PostLoading(){
  return(
    <div className="w-full border p-2 px-3 rounded-xl animate-pulse">
      <div className="flex flex-row content-center flex-wrap gap-2 mb-2">
        <div className="w-1/5 h-4 bg-gray-200 rounded-full"></div>
      </div>

      <div className="w-1/2 h-5 bg-gray-200 rounded-full"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-2"></div>

      <div className="flex flex-row content-center flex-wrap gap-2 mt-2">
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
        <div className="w-1/5 h-2 bg-primary-light rounded-full mt-2"></div>
      </div>
      
      <div className="flex flex-row gap-2">
        <div className="w-10 h-3 bg-gray-200 rounded-full mt-2"></div>
        <div className="w-10 h-3 bg-gray-200 rounded-full mt-2"></div>
      </div>
    </div>
  )
}