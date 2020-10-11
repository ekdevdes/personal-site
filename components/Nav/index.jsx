import cn from 'classnames'
import SocialLinks from '../SocialLinks'

import styles from './styles.module.scss'

const Nav = () => (
  <header className={styles.header}>
    <h1 className={cn("f-raleway", styles.text)}>Ethan Kramer</h1>
    <SocialLinks />
  </header>
)

export default Nav