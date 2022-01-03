import type { NextPage } from 'next'
import styled from 'styled-components'
import Carousel from './reasons'
import 'aos/dist/aos.css'

const SecondSectionContainer = styled.div `
    width: 30rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    height: max-content;
    padding: 2em 3em;
    position: relative;
    top: -9em;
    left: 2em;
    @media screen and (min-width: 768px) {
        width: 100vw;
        left: 3rem;
    }
    @media screen and (min-width: 1024px) {
        width: 100vw;
        left: 0rem;
    }
    @media screen and (min-width: 1400px) {
        width: 80vw;
    }
`
const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 140%;
    align-items: center;
    @media screen and (min-width: 768px) {
       margin-left: 3.5rem;
    }
    @media screen and (min-width: 1024px) {
        width: 110vw;
        margin-left: 6.5rem;
    }
    @media screen and (min-width: 1100px) {
        width: 90vw;
        margin-left: 1.5rem;
    }
    @media only screen and (min-width: 1400px) {
        margin-left: -7.5rem;
    }
`

const MustHaveText = styled.p `
    font-family: Orbitron;
    font-size: 20px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin: ${({ theme }) => theme.centerChildStyle.margin}; 
    letter-spacing: 0.5em;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};
    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`
const CarouselContainer = styled.div `
    width: 34rem;
    height: content-wrap;
    align-items: center;
    margin-top: 70px;
    @media screen and (min-width: 768px) {
        width: 140vw;
        margin-left: 55px;
    }   
    @media screen and (min-width: 1024px) {
        width: 100vw;
        margin-left: 85px;
    }  
    @media screen and (min-width: 1200px) {
        width: 85vw;
        margin-left: 15px;
    }  
`

const SecondSection: NextPage = () => {
    return (
        <SecondSectionContainer>
            <TextContainer>
                <MustHaveText> GalaBot is your must-have Solana NFT toolset </MustHaveText>
            </TextContainer>
            <CarouselContainer>
                <Carousel/>
            </CarouselContainer>
        </SecondSectionContainer>
      
    )
}

export default SecondSection