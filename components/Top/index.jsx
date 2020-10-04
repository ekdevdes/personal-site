import cn from 'classnames'
import Icon from '../Icon'

import styles from './styles.module.scss'

const Top = () => (
  <header className={styles.header}>
    <h1 className={cn("f-raleway", styles.text)}>Ethan Kramer</h1>
    <Icon name="codepen" />
  </header>
)

export default Top