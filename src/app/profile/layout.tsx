import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Nav from './components/Nav';

function layout({children} : {children: React.ReactNode}) {
  return (
    <div className="w-full">
      <div className='inline'>
        <AccountCircleOutlinedIcon className='size-14'/>
      </div>
      <p className="inline ms-2 font-bold text-xl">Guest</p>
      <p className="text-gray-400">Memember since: N/A</p>
      <Nav/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default layout