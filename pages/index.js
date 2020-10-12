import MainLayout from '../layouts/Main'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

import styles from './styles.module.scss'

const Home = () => (
  <MainLayout>
    <Nav />
    <Hero />
    <div className={styles.contentContainer}>
      <InfoSection header="Experience">
        <Experience 
          employer="Red Ventures"
          startDate="Aug. 2017"
          endDate="Current"
          position="Sr. Front End Developer" />
        <Experience 
          employer="Netplus Marketing"
          startDate="Feb. 2016"
          endDate="July 2017"
          position="Web Developer" />
        <Experience 
          employer="Leadnomics"
          startDate="Jul. 2015"
          endDate="Dec. 2015"
          position="Software Engineer Intern" />
      </InfoSection>
      <InfoSection header="Skills">
        <Skills />
      </InfoSection>
    </div>
  </MainLayout>
)

export default Home