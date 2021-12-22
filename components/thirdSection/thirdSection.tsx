import type { NextPage } from 'next'
import styled from 'styled-components'

const ThirdSectionConttainer = styled.div `
    width: 130vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: max-content;
    padding: 2em 2em;
    position: relative;
    top: -9em;
    @media screen and (min-width: 1024px) {
        width: 100vw;
    }
`

const NeverEndingTexttContainer = styled.div `
    display: flex;
    justify-content: flex-start;

`

const NeverEndingText = styled.p `
    font-family: Orbitron;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin: ${({ theme }) => theme.centerChildStyle.margin}; 
    font-size: 15px;
    letter-spacing: 0.6em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
`

const DummyBox = styled.div `
    width: 100%;
    position: relative;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    left: 25px;
    top: 14px; 
    height: 5rem;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #126060,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 90%;
    }
    
  `

  const DummyBoxSpan = styled.span `
    font-family: Orbitron;
    padding: 17px 3px 0 7px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 100%;
`

const ThirdSection: NextPage = () => {
    return (
        <ThirdSectionConttainer>
            <NeverEndingTexttContainer>
                <NeverEndingText>Never Ending Battle</NeverEndingText>
            </NeverEndingTexttContainer>
            <DummyBox>
                <DummyBoxSpan />
            </DummyBox>
        </ThirdSectionConttainer>
      
    )
}

export default ThirdSection;