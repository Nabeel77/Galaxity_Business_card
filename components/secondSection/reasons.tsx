import type { NextPage } from 'next'
import styled from 'styled-components'
import { whyUseGalaBotContent } from '../data/whyUseContent';
import { boxGradientBorderBackgroundDivVertical, boxGradientBorderBackgroundSpanVertical } from '../globalStyles';

  const NumberingText = styled.h2`
  font-family: Orbitron;
  font-size: 13px;
  text-align: justify;
  text-justify: inter-word;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 1100px) {
    font-size: 20px;
  }
`

const MainContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  @media screen and (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const ReasonsContainer = styled.div `
  width: 50%;
  @media screen and (min-width: 786px) {
  width: 25%;
}
@media screen and (min-width: 1024px) {
  width: 19%;
  margin-left: 8px;
}
@media screen and (min-width: 1100px) {
  width: 18%;
  margin-left: 19px;
}
`


const ReasonItem = styled.div `
  margin-top: 10px;
  width:  80%;
  height: 15vh;
  padding: 1px 1px 0 1px;
  background: linear-gradient(to bottom, #41FFFF,#000000);
  border-radius: 17px;
  @media screen and (min-width: 768px) {
    height: 20vh;
  }
  @media screen and (min-width: 1200px) {
    height: 25vh;
  }
`;

const ReasonText = styled.span `
  font-family: Raleway-ExtraLight;
  padding: 25px 3px 0 10px;
  font-size: 2.5vw;
  font-weight: lighter;
  color: white;
  text-align: left;
  letter-spacing: 2px;
  background: #000;
  display: block;
  border-radius: 17px;
  width: 100%;
  height: 101%;
  @media screen and (min-width: 768px) {
    font-size: 1.6vw;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1vw;
  }
`

const Carousel: NextPage = () => {


    return (
        <MainContainer>
            {whyUseGalaBotContent.map((item, index) => (
              <ReasonsContainer key={index}>
                <NumberingText>{item.id}</NumberingText>
                <ReasonItem>
                  <ReasonText>{item.reason}</ReasonText>
                </ReasonItem>
              </ReasonsContainer>
            ))}
        </MainContainer>
      )
}

export default Carousel;