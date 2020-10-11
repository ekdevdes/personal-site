import cn from 'classnames'

import styles from './styles.module.scss'

const InfoSection = ({ header, children }) => (
  <div className={styles.container}>
    <p className={cn('f-raleway', styles.header)}>{header}</p>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default InfoSection