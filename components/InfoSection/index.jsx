import cn from 'classnames'

import styles from './styles.module.scss'

const InfoSection = ({ header, children, className }) => (
  <div className={cn(styles.container, className)}>
    <p className={cn('f-raleway', styles.header)}>{header}</p>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default InfoSection