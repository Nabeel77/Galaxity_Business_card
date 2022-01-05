import type { NextPage } from 'next'
import styled from 'styled-components'
import { boxGradientBorderBackgroundSpanVertical } from '../globalStyles';
import { FAQQuestions, FAQAnswers } from '../data/faqData';
import FaqList from './faqList'
import 'aos/dist/aos.css'

const FAQSectionContainer = styled.div`
    margin-top: 120px;
    width: 100%;
    padding: 0 1em 1em 2em;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        margin-top: 20px;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 100px;
    }
    @media screen and (min-width: 1200px) {
        padding: 0 100px 0 100px;
        margin-top: 200px;
    }
    @media screen and (min-width: 1400px) {
        padding: 0 150px 0 150px;
        margin-top: 250px;
      }

`

const FAQText  = styled.p `
    font-family: Orbitron;
    font-size: 25px;
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        margin-left: 0px;
        font-size: 45px;
    }
    @media screen and (min-width: 1100px) {
        margin-left: 15px;
        font-size: 45px;
    }
    @media screen and (min-width: 1400px) {
        font-size: 55px;
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