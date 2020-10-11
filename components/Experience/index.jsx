import styles from './styles.module.scss'

const Experience = ({ employer, startDate, endDate, position }) => (
  <div className={styles.container}>
    <p className={styles.employer}>
      <span>{employer}</span> 
      <span>{startDate} - {endDate}</span>
    </p>
    <p className={styles.position}>{position}</p>
  </div>
)

export default Experience