import styles from './styles.module.scss'

const Hero = () => (
  <div className={styles.container}>
    <p className={styles.header}>Hello.</p>
    <p className={styles.body}> I'm a Charlotte, North Carolina based Full Stack Engineer.</p>
    {/* Two or three sentences */}
    <p className={styles.about}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error eligendi quas commodi ad similique. Ipsam dicta quis consequatur itaque, accusantium provident explicabo atque velit delectus vitae perferendis reiciendis laudantium.</p>
  </div>
)

export default Hero