import isEmpty from 'lodash/isEmpty'

/**
 * Get the page's title from the current route
 * 
 * @param {string} pathName The relative path of the current page
 * 
 * @returns {string} A formatted string of the page's title (e.g. `/about` -> `About`)
 */
const getPageName = (pathName) => {
  let _pathName = pathName.replace('/', '')

  if (isEmpty(_pathName)) {
    _pathName = 'home'
  } 
  
  return `${_pathName.charAt(0).toUpperCase()}${_pathName.slice(1)}`
}

export default getPageName