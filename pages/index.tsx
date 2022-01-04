import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import type { NextPage } from 'next'
import styled from 'styled-components'
import Hero from '../components/heroSection/heroSection';
import SecindSectionContainer from '../components/secondSection/secondSection';
import ThirdSection from '../components/thirdSection/thirdSection';
import FourthSection from '../components/fourthSection/fourthSection'
import RoadMap from '../components/roadMapSection/roadMapSection'
import TheTeam from '../components/teamSection/teamSection'
import FAQ from '../components/faqSection/faqSection'
import Footer from '../components/footerSection/footerSection'

const Container = styled.div`
  width: 99%;
  height: 100%;
  display:block;

`

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
}, [])

  return (
    <Container>
      <Hero/>
      <SecindSectionContainer/>
      <ThirdSection />
      <FourthSection />
      <RoadMap />
      <TheTeam />
      <FAQ />
      <Footer />
    </Container>
  )
}

export default Home;
