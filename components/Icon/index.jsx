import CodePenIcon from '../../public/codepen-icon.svg'
import GithubIcon from '../../public/github-icon.svg'
import LinkedInIcon from '../../public/linkedin-icon.svg'
import DownloadIcon from '../../public/download-icon.svg'

const Icon = ({ name }) => {
  const getIcon = () => {
    switch (name) {
      case "codepen":
        return <CodePenIcon />
      
      case "github":
          return <GithubIcon />
      
      case "linkedin":
          return <LinkedInIcon />
  
      case "download":
      default:
        return <DownloadIcon />
    }
  }

  return getIcon()
}

export default Icon