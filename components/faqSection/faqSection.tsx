import type { NextPage } from 'next'
import styled from 'styled-components'
import { boxGradientBorderBackgroundSpanVertical } from '../globalStyles';
import { FAQQuestions, FAQAnswers } from '../data/faqData';
import FaqList from './faqList'
import 'aos/dist/aos.css'

const FAQSectionContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    padding: 0 1em 1em 2em;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        margin-top: 180px;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 200px;
    }
    @media screen and (min-width: 1200px) {
        padding: 0 100px 0 100px;
        margin-top: 350px;
    }
    @media screen and (min-width: 1500px) {
        padding: 0 140px 0 140px;
        margin-top: 340px;
      }

`

const FAQText  = styled.p `
    font-family: Orbitron;
    font-size: 5vw;
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 4vw;
        margin-left: 0px;
    }
    @media screen and (min-width: 1100px) {
        font-size: 2.5vw;
    }
    @media screen and (min-width: 1500px) {
    }
`

const FAQTextContainer = styled.div `
    width:  100%;
    height: max-content;
    padding: 1px 1px 0 1px;
    
    background: linear-gradient(to bottom, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 95%;
    }
    @media screen and (min-width: 1100px) {
        width: 100%;
    }
`;

const FAQTextSpan = boxGradientBorderBackgroundSpanVertical


const FAQ: NextPage = () => {

    return (
        <FAQSectionContainer> 
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