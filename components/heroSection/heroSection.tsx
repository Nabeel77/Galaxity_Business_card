import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'

const HeroContainer = styled.div`
  width: 22rem;
  height: 100vh;
  position: relative;
  top: -20px;
  @media screen and (min-width: 540px) {
    width:32%
  }
  @media screen and (min-width: 768px) {
    width:35%
  }
  @media only screen and (min-width: 1080px) {
    width: 100%;
    height: 135vh;
  }
`
const HeroBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    @media screen and (min-width: 768px) {
      width:100vw;
     }
`
const HeroImage = styled.img `
  position: absolute;
  top: -23%;
  left: -23%;
  width: 120%;
  height: 100%;
  @media only screen and (min-width: 1200px) {
    width: 80%;
    height: 100%;
    top: -16%;
    left: -22%;
  }
  @media only screen and (min-width: 1300px) {
    width: 80%;
  }
`

const GalaImage = styled.img `
position: absolute;
top: 15%;
left: 15%;
width: 60%;
height: 40%;
@media screen and (min-width: 768px) {
  top: 15%;
  left: 6%;
}
@media screen and (min-width: 1200px) {
  width: 45%;
  height: 60%;
  top: 12%;
  left: 3%;
}
@media screen and (min-width: 1400px) {
  width: 35%;
  height: 55%;
  top: 15%;
  left: 7%;
}
`
const GalaxityTextContainer = styled.div `
  position: relative;
  width: max-content;
  left: 80%;
  top: 28%;
  padding: 1px 1px 1px 0;
  display: flex;
  flex-direction: column;
  height: max-content;
  @media screen and (min-width: 540px) {
    left: 194%;
    top: 24%;
  }
  @media screen and (min-width: 768px) {
    left: 197%;
    top: 25%;
  }
@media only screen and (min-width: 1024px) {
    left: 37rem;
    top: 20rem;
 }
 @media only screen and (min-width: 1200px) {
  left: 40rem;
  top: 20rem;
 }
 @media only screen and (min-width: 1400px) {
  left: 59rem;
  top: 28rem;
}
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 22px;
  letter-spacing: 1.34em;
  width: max-content;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 540px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
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
  position: relative;
  top: -15px;
  font-size: 13px;
  letter-spacing: 0.4em;
  width: max-content;
  height: max-content;
  color: white;
  @media only screen and (min-width: 540px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
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
    position: relative;
    top: -5%;
    right: -175%;
    width: max-content;
    height: max-content;
    @media screen and (min-width: 540px) {
      top: -7%;
      right: -410%;
     }
    @media screen and (min-width: 768px) {
        right: -410%;
    }
    @media only screen and (min-width: 1024px) {
        top: -9%;
        right: -112%;
    }
    @media only screen and (min-width: 1200px) {
      top: -12%;
      right: -90%;
    }
`

const Hero: NextPage = () => {
    return (
        <HeroContainer>
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
        </HeroContainer>
      
    )
}

export default Hero;
