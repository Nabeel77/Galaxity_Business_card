import type { NextPage } from 'next'
import styled from 'styled-components'
import Icons from '../icons'

const FooterContainer = styled.div`
    position: relative;
    top: 50em;
    left:0;
    bottom: 0;
    width: 123vw;
    height: 50vh;
    @media screen and (min-width: 768px) {
        top: 80em;
    }
    @media only screen and (min-width: 1024px) {
        width: 96vw;
    }
`

const FooterBackground = styled.img `
  width: 110%;
  height: 100%;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 160%;
  }   
`

const GalabotAndGalaxityTextContainer = styled.div`
    position: relative;
    top: -7em;
    right: -8.5em;
    display: flex;
    width: 80vw;
    height: 15vh;
    justify-content: space-around;
    @media screen and (min-width: 768px) {
        width: 90vw;
        top: -11em;
        right: -17.5em;
    }
    @media only screen and (min-width: 1024px) {
        width: 55vw;
        top: -9em;
        right: -24.5em;
    }

    @media only screen and (min-width: 1400px) {
        width: 55vw;
        top: -12em;
        right: -54.5em;
    }
`
const GalaxityTextContainer = styled.div`
 display: flex;
 align-items: center;
 height: 100%;
 width: 70%;
`

const GalaxityText = styled.p `
  font-family: Orbitron;
  font-size: 15px;
  letter-spacing: 1em;
  width: max-content;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 45px;
 }
`
const GalaImageContainer = styled.div`
 height: 100%;
 width: 30%;
`

const GalaImage = styled.img `
    float: right;
    width: 60%;
    height: 100%;
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