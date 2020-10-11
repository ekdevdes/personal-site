import cn from 'classnames'

import styles from './styles.module.scss'

const Icon = ({ name, className }) => (
  <img src={`${name}.svg`} className={cn(styles.img, className)} alt={`${name} icon`} />
)

export default Icon