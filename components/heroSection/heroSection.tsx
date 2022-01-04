import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'

const HeroContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 540px) {
  }
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
  @media only screen and (min-width: 1080px) {
    width: 100%;
    height: 100vh
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  flex:1;
  height: 100%;
`

const HeroTextAndIconsContaner = styled.div`
  position: relative;  
  flex:1;
  height: 100%;
`

const HeroImage = styled.img `
  position: absolute;
  object-fit: contain;
  left: -45px;
  height: 100%;
  @media screen and (min-width: 768px) {
    left: -10px;
  }
  @media screen and (min-width: 1024px) {
    left: -5px;
    height: 125%;
  }
  @media screen and (min-width: 1400px) {
    left: -30px;
  }
`

const GalaxityTextContainer = styled.div `
  position: relative;
  width: max-content;
  padding: 1px 1px 1px 0;
  display: flex;
  flex-direction: column;
  height: max-content;
  top: 30%;
  @media only screen and (min-width: 768px) {
    top: 38%
  }
  @media only screen and (min-width: 1024px) {
    top: 45%
  }
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 12px;
  letter-spacing: 1.34em;
  width: max-content;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 50px;
  }
`
const NftText = styled.p `
  font-family: Raleway-ExtraLight;
  font-size: 7px;
  margin-top: 2px;
  letter-spacing: 0.4em;
  width: max-content;
  height: max-content;
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 13px;
    margin-top: -12px;
  }
  @media only screen and (min-width: 1024px) {
    top: -30px;
    font-size: 20px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 20px;
  }
`
const IconsContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: max-content;
    height: max-content;
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