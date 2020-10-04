import Head from 'next/head'
import { useRouter } from 'next/router'

import getPageName from '../../utils/getPageName'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>{getPageName(pathname)} · Ethan Kramer · Front End Developer</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
        crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,700&family=Raleway:wght@700&display=swap" 
        rel="stylesheet" />
    </Head>
  )
}

export default Header