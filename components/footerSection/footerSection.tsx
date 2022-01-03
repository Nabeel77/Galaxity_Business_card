import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'
import 'aos/dist/aos.css'

const FooterContainer = styled.div`
    position: relative;
    top: 70em;
    left:0;
    bottom: 0;
    width: 145vw;
    height: 50vh;
    @media screen and (min-width: 768px) {
        top: 125em;
    }
    @media only screen and (min-width: 1024px) {
        width: 96vw;
        top: 85em;
    }
    @media only screen and (min-width: 1100px) {
        width: 96vw;
        top: 105em;
    }
    @media only screen and (min-width: 1400px) {
        width: 96vw;
        top: 130em;
    }
`

const FooterBackground = styled.img `
  width: 110%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    height: 130%;
  }  
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 160%;
  }   
  @media only screen and (min-width: 1100px) {
    height: 230%;
 }
`

const GalabotAndGalaxityTextContainer = styled.div`
    position: relative;
    top: -7em;
    right: -12.5em;
    display: flex;
    width: 80vw;
    height: 15vh;
    justify-content: space-around;
    @media screen and (min-width: 768px) {
        width: 80vw;
        top: -11em;
        right: -18.5em;
    }
    @media only screen and (min-width: 1024px) {
        width: 55vw;
        top: -9em;
        right: -24.5em;
    }

    @media only screen and (min-width: 1200px) {
        width: 55vw;
        top: -8em;
        right: -19.5em;
    }

    @media only screen and (min-width: 1400px) {
        width: 55vw;
        top: -12em;
        right: -40em;
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
  font-size: 20px;
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
    height: 100%;
    width: 50%;
`

const GalaImage = styled.img `
    float: right;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 768px) {
        width: 70%;
    }
    @media screen and (min-width: 1024px) {
        width: 40%;
    }
`

const IconsContainer = styled.div`
    position: relative;
    top: -12em;
    left: 2em;
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