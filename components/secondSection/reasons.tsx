import type { NextPage } from 'next'
import styled from 'styled-components'
import { whyUseGalaBotContent } from '../data/whyUseContent';
import { boxGradientBorderBackgroundDivVertical, boxGradientBorderBackgroundSpanVertical } from '../globalStyles';

  const NumberingText = styled.h2`
  font-family: Orbitron;
  font-size: 27px;
  text-align: justify;
  text-justify: inter-word;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 1100px) {
    font-size: 20px;
  }
`

const MainContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 107%;
  height: fit-content;
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
  margin-left: 19px;
  width: 20%;
}
@media screen and (min-width: 1024px) {
  width: 18%;
}
`


const ReasonItem = styled.div `
  width:  80%;
  height: 15em;
  padding: 1px 1px 0 1px;
  background: linear-gradient(to bottom, #41FFFF,#000000);
  border-radius: 17px;
`;

const ReasonText = styled.div `
  font-family: Orbitron;
  padding: 17px 3px 0 7px;
  font-size: 23px;
  color: white;
  text-align: left;
  background: #000;
  display: block;
  border-radius: 17px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
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