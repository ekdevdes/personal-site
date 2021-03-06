import cn from 'classnames'

import MainLayout from '../layouts/Main'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import SocialLinks from '../components/SocialLinks'

import styles from './styles.module.scss'

const Home = () => (
  <MainLayout>
    <Nav />
    <Hero />
    <div className={styles.contentContainer}>
      <InfoSection header="Experience" className={styles.infoSection}>
        <div className={styles.experienceContainer}>
          <Experience 
            employer="Red Ventures"
            employerSite="https://redventures.com/"
            startDate="Aug. 2019"
            endDate="Current"
            position="Sr. Front End Developer" />
          <Experience 
            employer="Red Ventures"
            employerSite="https://redventures.com/"
            startDate="Aug. 2017"
            endDate="Aug. 2019"
            position="Front End Developer" />
          <Experience 
            employer="Netplus Marketing (Pavone)"
            employerSite="http://netplus.agency"
            startDate="Feb. 2016"
            endDate="Jul. 2017"
            position="Web Developer" />
          <Experience 
            employer="Brownstein Group"
            employerSite="https://www.brownsteingroup.com/"
            startDate="Jul. 2015"
            endDate="Dec. 2015"
            position="Front End Developer, Contract" />
          <Experience 
            employer="Leadnomics"
            employerSite="https://www.leadnomics.com/"
            startDate="Jun. 2014"
            endDate="Aug. 2014"
            position="Software Engineer Intern" />
        </div>
        <div className={styles.educationContainer}>
          <p className={cn('f-raleway', styles.header)}>Education</p>
          <Experience 
              employer="Liberty University"
              startDate="2013"
              endDate="2016"
              position="B.S. in Information Technologies: Web and Mobile Programming" />
          <Experience 
              employer="Burlington County College"
              startDate="2010"
              endDate="2013"
              position="A.S. in Computer Science" />
        </div>
      </InfoSection>
      <SocialLinks showIcons />
      <InfoSection header="Skills" className={cn(styles.infoSection, styles.skillsContainer)}>
        <Skills />
      </InfoSection>
      <div className={styles.socialContainer}>
        <SocialLinks showIcons />
      </div>
    </div>
  </MainLayout>
)

export default Home