import type { NextPage } from 'next'
import styled from 'styled-components'

const FAQsParentContainer = styled.div `
    width: 70%;
    display: flex; 
    flex-direction: column;
`

const SingleFAQContainer = styled.div `
    width: 100%;
    max-width: 100%;
    width: wrap-content;
    height: wrap-content;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap:break-word;
`

const QuestionText = styled.p `
  word-break: break-all;
  font-family: Raleway-Regular;
  font-size: 11px;
  font-weight: bold;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 540px) {
    font-size: 20px;
  }
`

const AnswerText = styled.p `
  font-family: Raleway-Regular;
  margin-top: -1px;
  font-size: 11px;
  overflow-wrap: normal;
  height: max-content;
  color: white;
  @media screen and (min-width: 540px) {
    font-size: 20px;
  }
`
    
type FaqList = {
    questions: string[],
    answers: string[]
}

const FaqList = (props: FaqList) => {

    const content = 
                <FAQsParentContainer>
                    {props.questions.map((question: string, index: number) => {
                        return (
                            <SingleFAQContainer key={index}>
                                <QuestionText>{question}</QuestionText>
                                {
                                    props.answers[index] ? 
                                    <AnswerText>{props.answers[index]}</AnswerText>
                                    : null
                                }
                            </SingleFAQContainer>
                        )
                    })}
                </FAQsParentContainer>
    return (
        <>
            {content}
        </>
    );

}

export default FaqList;