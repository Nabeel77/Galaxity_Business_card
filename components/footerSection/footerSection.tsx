import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'
import 'aos/dist/aos.css'

const FooterContainer = styled.div`
    width: 100%;
    height: 30vh;
    position: relative;
    top: -150px;
    
`

const FooterBackground = styled.img `
  width: 100%;
  height: 50vh;
  position: absolute;
  @media only screen and (min-width: 1100px) {
    top: -130px;
    height: 135vh;
 }
 @media only screen and (min-width: 1500px) {
    height: 125vh;
 }
`

const GalabotAndGalaxityTextContainer = styled.div`
    position: absolute;
    top: 130%;
    left: 35%;
    display: flex;
    width: 60%;
    height: max-content;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (min-width: 1100px) {
        top: 300%;
        left: 38%;
    }
    @media only screen and (min-width: 1500px) {
        top: 280%;
    }
`
const GalaxityTextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 3vw;
  letter-spacing: 1em;
  width: max-content;
  height: max-content;
  color: white;
  @media only screen and (min-width: 1024px) {
    letter-spacing: 1.3em;
    font-size: 2.4vw;
 }
`
const GalaImageContainer = styled.div`
    height: 60%;
    width: 20%;
    object-fit: contain;
    @media screen and (min-width: 1080px) {
        height: 50%;
        width: 15%;
    }
    @media screen and (min-width: 1500px) {
        height: 40%;
        width: 10%;
    }
`

const GalaImage = styled.img `
    float: right;
    width: 100%;
    height: 100%;
`

const IconsContainer = styled.div`
    position: absolute;
    top: 130%;
    left: 5%;
    width: max-content;
    height: max-content;
    @media only screen and (min-width: 768px) {
        top: 140%;
    }
    @media only screen and (min-width: 1200px) {
        top: 300%;
    }
    @media only screen and (min-width: 1500px) {
        top: 290%;
    }
`

const Footer: NextPage = () => {

    return (
        <FooterContainer>
            <FooterBackground src="/images/footer_background.png" alt="footer-image"/>
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