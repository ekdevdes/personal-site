import styles from './styles.module.scss'

const Experience = ({ employer, employerSite, startDate, endDate, position }) => (
  <div className={styles.container}>
    <div className={styles.employer}>
      <a href={employerSite} target="blank" rel="noopener">{employer}</a> 
      <span>{startDate} - {endDate}</span>
    </div>
    <p className={styles.position}>{position}</p>
  </div>
)

export default Experience