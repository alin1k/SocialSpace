import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="w-full bg-primary-light text-neutral p-4 pb-16 text-center">
      <p>Web app designed and developed by <a href='https://github.com/alin1k' target='_blank' className='text-primary-dark'>Olteanu Alin</a> ©</p>
      <p>Check out this project on <a href='https://github.com/alin1k/SocialSpace' target='_blank' className='text-primary-dark'>Github</a> <GitHubIcon className='ms-1'/> </p>
    </footer>
  )
}

export default Footer