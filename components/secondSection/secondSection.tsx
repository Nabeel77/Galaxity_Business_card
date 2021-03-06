import type { NextPage } from 'next'
import styled from 'styled-components'
import Carousel from './reasons'
import 'aos/dist/aos.css'

const SecondSectionContainer = styled.div `
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    height: max-content;
    padding: 2em 1em;
    @media screen and (min-width: 1024px) {
        margin-top: 20%;
        padding: 2em 3em;
    }
    @media screen and (min-width: 1200px) {
        margin-top: 200px;
    }
    @media screen and (min-width: 1600px) {
       margin-top: 300px;
    }
`

const SecondSectionChildContainer = styled.div`
    width: 100%;
    height: max-content;
    margin-left: 20px;
`

const TextContainer = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    text-align: left;
    @media screen and (min-width: 1024px) {
        margin-left: 30px;
    }
`

const MustHaveText = styled.p `
    font-family: Orbitron;
    font-size: 3vw;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin-bottom: 20px; 
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 1.8vw;
    }
    @media screen and (min-width: 1024px) {
        margin-bottom: 40px; 
    }
`
const CarouselContainer = styled.div `
    width: 100%;
    height: content-wrap;
    align-items: center;
    margin-top: 10px; 
    @media screen and (min-width: 1024px) {
        margin-left: 10px;
    }  
`

const SecondSection: NextPage = () => {
    return (
        <SecondSectionContainer>
            <SecondSectionChildContainer>
            <TextContainer>
                <MustHaveText> GalaBot is your must-have Solana NFT toolset </MustHaveText>
            </TextContainer>
            <CarouselContainer>
                <Carousel/>
            </CarouselContainer>
            </SecondSectionChildContainer>
        </SecondSectionContainer>
      
    )
}

export default SecondSection