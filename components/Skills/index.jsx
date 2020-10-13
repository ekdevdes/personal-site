import styles from './styles.module.scss'

const Skills = () => {
  const skillList = [
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
    'JS',
    'HTML',
    'CSS',
  ]

  return <div className={styles.container}>
    {skillList.map((skill, i) => (
      <p className={styles.skill} key={i}>{skill}</p>
    ))}
  </div>
}

export default Skills