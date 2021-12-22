import type { NextPage } from 'next'
import styled from 'styled-components'
import Carousel from './reasons'

const SecondSectionContainer = styled.div `
    width: 120vw;
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    height: max-content;
    padding: 2em 3em;
    position: relative;
    top: -9em;
    @media screen and (min-width: 768px) {
        width: 100vw;
    }
`
const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        width: 100%;
    }
`

const MustHaveText = styled.p `
    font-family: Orbitron;
    font-size: 15px;
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
    width: 128vw;
    height: content-wrap;
    align-items: center;
    @media screen and (min-width: 768px) {
        width: 120vw;
        margin-left: 55px;
    }   
    @media screen and (min-width: 1024px) {
        width: 110vw;
        margin-left: 85px;
    }  
    @media screen and (min-width: 1200px) {
        width: 80vw;
        margin-left: 85px;
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