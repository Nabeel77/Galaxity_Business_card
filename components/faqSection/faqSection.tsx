import type { NextPage } from 'next'
import styled from 'styled-components'
import { boxGradientBorderBackgroundSpanVertical } from '../globalStyles';
import { FAQQuestions, FAQAnswers } from '../data/faqData';
import FaqList from './faqList'
import 'aos/dist/aos.css'

const FAQSectionContainer = styled.div`
    position: relative;
    top: 66em;
    left: 0px;
    padding: 0 1em 1em 2em;
    width: 182vw;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 160vw;
        top: 100em;
        left: 30px;
    }
    @media screen and (min-width: 1024px) {
        top: 90em;
        width: 125vw;
    }
    @media screen and (min-width: 1200px) {
        width: 80vw;
        top: 95rem;
        left: 6rem;
    }
    @media screen and (min-width: 1400px) {
        top: 135rem;
        left: 5rem;
      }

`

const FAQText  = styled.p `
    font-family: Orbitron;
    font-size: 15px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        margin-left: 0px;
        font-size: 45px;
    }
    @media screen and (min-width: 1100px) {
        font-size: 55px;
    }
`

const FAQTextContainer = styled.div `
    width:  100%;
    height: max-content;
    padding: 1px 1px 0 1px;
    background: linear-gradient(to bottom, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 1100px) {
        width: 100%;
    }
`;

const FAQTextSpan = boxGradientBorderBackgroundSpanVertical


const FAQ: NextPage = () => {

    return (
        <FAQSectionContainer data-aos="zoom-in"> 
            <FAQText>FAQ</FAQText>
            <FAQTextContainer>
                <FAQTextSpan>
                   <FaqList questions={FAQQuestions} answers={FAQAnswers}/>
                </FAQTextSpan>
            </FAQTextContainer>
        </FAQSectionContainer>
    )

}

export default FAQ;