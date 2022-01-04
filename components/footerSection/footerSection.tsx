import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'
import 'aos/dist/aos.css'

const FooterContainer = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    @media screen and (min-width: 768px) {
  
    }
    @media only screen and (min-width: 1024px) {
   
    }
    @media only screen and (min-width: 1100px) {
   
    }
    @media only screen and (min-width: 1400px) {
       
    }
`

const FooterBackground = styled.img `
  width: 100%;
  height: 100%;
  position: absolute;
  @media only screen and (min-width: 768px) {

  }  
  @media only screen and (min-width: 1024px) {

  }   
  @media only screen and (min-width: 1100px) {
    height: 230%;
 }
`

const GalabotAndGalaxityTextContainer = styled.div`
    position: absolute;
    top: 70%;
    left: 20%;
    display: flex;
    width: 80%;
    height: max-content;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width: 768px) {
       
    }
    @media only screen and (min-width: 1024px) {
     
    }

    @media only screen and (min-width: 1200px) {
       
    }

    @media only screen and (min-width: 1400px) {
      
    }
`
const GalaxityTextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 60%;
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 10px;
  letter-spacing: 1em;
  width: max-content;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 40px;
 }
 @media only screen and (min-width: 1400px) {
    font-size: 45px;
 }
`
const GalaImageContainer = styled.div`
    height: 60%;
    width: 20%;
    @media screen and (min-width: 1080px) {
        height: 50%;
        width: 15%;
    }
`

const GalaImage = styled.img `
    float: right;
    width: 100%;
    height: 100%;
   
    @media screen and (min-width: 1024px) {
       
    }
`

const IconsContainer = styled.div`
    position: absolute;
    top: 70%;
    left: 5%;
    width: max-content;
    height: max-content;
    @media screen and (min-width: 768px) {
        top: -18em;
    }
    @media only screen and (min-width: 1024px) {
        top: -14em;
    }
    @media only screen and (min-width: 1400px) {
        top: -18em;
    }
`

const Footer: NextPage = () => {

    return (
        <FooterContainer>
            <FooterBackground src="/images/mint_footer.png" alt="footer-image"/>
            <GalabotAndGalaxityTextContainer>
                <GalaImageContainer>
                    <GalaImage alt="gala-bot" src="/images/galabot_mini.png"/>
                </GalaImageContainer>
                <GalaxityTextContainer>
                <GalaxityText>GALAXITY</GalaxityText>
                </GalaxityTextContainer>
            </GalabotAndGalaxityTextContainer>
            <IconsContainer>
                <Icons />
            </IconsContainer>
        </FooterContainer>
    )

}

export default Footer