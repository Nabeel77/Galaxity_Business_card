import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'

const HeroContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  @media screen and (min-width: 540px) {
    height: 40vh;
  }
  @media screen and (min-width: 900px) {
    height: 50vh;
  }
  @media screen and (min-width: 1024px) {
    height: 35vh;
  }
  @media only screen and (min-width: 1200px) {
    height: 95vh
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  flex:1;
  flex-basis: 50%;
  max-width: 50%;
  height: 100%;
`

const HeroTextAndIconsContaner = styled.div`
  position: relative;  
  flex:1;
  flex-basis: 50%;
  max-width: 50%;
  height: 100%;
`

const HeroImage = styled.img `
  width: 125%;
  margin-left: -10px;
  object-fit: contain;
  @media only screen and (min-width: 540px) {
    width: 105%;
  }
  @media only screen and (min-width: 1200px) {
    width: 115%;
  }
`

const GalaxityTextContainer = styled.div `
  width: max-content;
  display: flex;
  flex-direction: column;
  height: max-content;
  margin-top: 45%;
  margin-left: -2vw;
  @media only screen and (min-width: 550px) {
    margin-top: 35%;
    margin-left: -8vw;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 40%;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 45%;
  }
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 3vw;
  letter-spacing: 1em;
  width: max-content;
  height: max-content;
  color: white;
  @media screen and (min-width: 768px) {
    letter-spacing: 1.34em;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 2.6vw;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`
const NftText = styled.p `
  font-family: Raleway-ExtraLight;
  font-size: 1.5vw;
  margin-top: -3px;
  letter-spacing: 0.4em;
  width: max-content;
  height: max-content;
  color: white;
  @media only screen and (min-width: 768px) {

    margin-top: -12px;
  }
  @media only screen and (min-width: 1024px) {
    letter-spacing: 0.7em;
    margin-top: -20px;
    font-size: 1.1vw;
  }
  @media only screen and (min-width: 1500px) {

   
  }
`
const IconsContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: max-content;
    height: max-content;
    @media only screen and (min-width: 1024px) {
      top: 55px;
      right: 55px;
    }
`

const Hero: NextPage = () => {
    return (
        <HeroContainer>
           <HeroImageContainer> 
              <HeroImage src={"/images/herro_images.png"} alt='gala-bot'/>
           </HeroImageContainer>
           <HeroTextAndIconsContaner> 
              <GalaxityTextContainer>
                <GalaxityText>GALAXITY</GalaxityText>
                <NftText>{`Buy NFT'S before anyone else`}</NftText>
              </GalaxityTextContainer>
           </HeroTextAndIconsContaner>
           <IconsContainer>
             <Icons/>
           </IconsContainer>
        </HeroContainer>
      
    )
}

export default Hero;


/**
 
  <HeroBackground> 
              <HeroImage alt="main-image" src="/images/hero_background.png"/>
              <GalaImage alt="gala-bot" src="/images/gala_hero_image.png"/>
            </HeroBackground>
            <GalaxityTextContainer>
              <GalaxityText>GALAXITY</GalaxityText>
              <NftText>{`Buy NFT'S before anyone else`}</NftText>
            </GalaxityTextContainer>
            <IconsContainer>
              <Icons />
  </IconsContainer>
  
 
 * */