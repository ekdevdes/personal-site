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
  ]

  return <div className={styles.container}>
    {skillList.map(s => (
      <p className={styles.skill}>{s}</p>
    ))}
  </div>
}

export default Skills