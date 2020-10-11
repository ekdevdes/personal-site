import Icon from '../Icon'

import styles from './styles.module.scss'

const SocialLinks = () => (
  <div className={styles.iconContainer}>
    <a href="https://www.linkedin.com/in/ethankr/" target="_blank" rel="noopener" aria-label="LinkedIn">
      <Icon name="linkedin" />
    </a>
    <a href="https://github.com/ekdevdes" target="_blank" rel="noopener" aria-label="Github">
      <Icon name="github" />
    </a>
    <a href="https://codepen.io/ekramer2" target="_blank" rel="noopener" aria-label="Codepen">
      <Icon name="codepen" />
    </a>
  </div>
)

export default SocialLinks;