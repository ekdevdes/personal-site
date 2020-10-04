import isEmpty from 'lodash/isEmpty'

const getPageName = (pathName) => {
  let _pathName = pathName.replace('/', '')

  if (isEmpty(_pathName)) {
    _pathName = 'home'
  } 
  
  return `${_pathName.charAt(0).toUpperCase()}${_pathName.slice(1)}`
}

export default getPageName