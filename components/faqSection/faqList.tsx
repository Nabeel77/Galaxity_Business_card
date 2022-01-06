import type { NextPage } from 'next'
import styled from 'styled-components'

/** @internal
 * @author: Nabeel
 * Shows questions and answers as an FAQ list. Questions and answers ar stored in an array.
 * Any links appearing in answers strings will be shown as links. The links can occur in the 
 * the form of https://, www.something.com or simply something.com and they will be found from 
 * a string using regex. Links can appear at any position in the answer string. 
 * */

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
    margin-bottom: -10px;
`

const QuestionText = styled.p `
  word-break: break-all;
  font-family: Raleway-regular;
  font-size: 3vw;
  height: max-content;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 768px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1024px) {
    font-family: Raleway-bold;
    font-weight: 400;
    font-size: 1vw;
  }
`

const AnswerText = styled.p `
  word-break: break-all;
  font-family: Raleway-ExtraLight;
  margin-top: -12px;
  font-size: 3vw;
  overflow-wrap: normal;
  height: max-content;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 2vw;
  }
  @media screen and (min-width: 1024px) {
    margin-top: -6px;
    font-size: 1vw;
  }
`

const Link = styled.a `
    text-decoration: underline;
    background-color: transparent;
    color: #2562F6;
    cursor: pointer;
`
    
type FaqList = {
    questions: string[],
    answers: string[]
}
const FaqList = (props: FaqList) => {

     const openLink = (link: string): void => {
        if (link.indexOf("https://www.") === -1) {
            window.open(`https://www.${link}`, "_blank")
        }
        window.open(link, "_blank")
    } 

    /* 
        findUrl checks all answers of faq list and checks if a url or just host and domain name exists
        in an answer string, if yes, it returns an object whose key is the index of the string in which
        matching values were found and that key's value is an object containing the url extratced from the
        string and the index where that url starts in that string.
    */
    const findUrl = () => {
        const stringsContainingUrl = {} as any;
        props.answers.forEach((item: any, index: any) => {
            if (item !== null) {
            const match = /((ftp|http|https):\/\/)?([a-z0-9]+\.)?([a-z0-9][a-z0-9-]*)?((\.[a-z]{2,6})|(\.[a-z]{2,6})(\.[a-z]{2,6}))/i.exec(item)
            /*
                .exec will return an object if it finds a matching value. That object will contain
                the matching value at the key[0] and will contain the starting index of matching value
                in the containing string at they key[index]
            */
            if (match) {
                stringsContainingUrl[index] = {
                    index: match.index,
                    foundValue: match[0]
                };
            }
         }
        })
        return stringsContainingUrl;
    }
    const urlIndexes = findUrl();
    /*
        In content, while rendering an answer from props.answer, I check if urlIndexes contains the
        current index as a key. If it does, then I break the string starting from 0 index to the matching 
        url's starting index value in this answer and show this subString, then show the found url as 
        a link.
    */
    const content = 
                <FAQsParentContainer>
                    {props.questions.map((question: string, index: number) => {
                        return (
                            <SingleFAQContainer key={index}>
                                <QuestionText>{question}</QuestionText>
                                {
                                    props.answers[index] ? 
                                    urlIndexes.hasOwnProperty(index) ? 
                                    <AnswerText>
                                        {props.answers[index].substring(0, urlIndexes[index].index)}
                                        <Link onClick={() => openLink(urlIndexes[index].foundValue)}>{urlIndexes[index].foundValue}</Link>
                                        {props.answers[index].substring(urlIndexes[index].index + urlIndexes[index].foundValue.length) }
                                    </AnswerText> 
                                    : <AnswerText>{props.answers[index]}</AnswerText>
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