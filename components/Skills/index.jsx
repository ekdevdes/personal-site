import skillList from './skills'

import styles from './styles.module.scss'

const Skills = () => (
  <div className={styles.container}>
    {skillList.map((skill, i) => (
      <p className={styles.skill} key={i}>{skill}</p>
    ))}
  </div>
)

export default Skills