import type { NextPage } from 'next'
import styled from 'styled-components'
import { boxGradientBorderBackgroundDivVertical, boxGradientBorderBackgroundSpanVertical } from '../globalStyles';
import { FAQQuestions, FAQAnswers } from '../data/faqData';
import FaqList from './faqList'

const FAQSectionContainer = styled.div`
    position: relative;
    top: 50em;
    left: 0px;
    padding: 0 1em 1em 2em;
    width: 138vw;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 130vw;
        top: 80em;
        left: 30px;
    }
    @media screen and (min-width: 1024px) {
        width: 125vw;
    }
    @media screen and (min-width: 1200px) {
        width: 100vw;
        left: 0px;
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
`

const FAQTextContainer = boxGradientBorderBackgroundDivVertical(null, "max-content");

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