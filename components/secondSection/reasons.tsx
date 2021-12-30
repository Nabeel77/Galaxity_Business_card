import type { NextPage } from 'next'
import styled from 'styled-components'
import { whyUseGalaBotContent } from '../data/whyUseContent';
import { boxGradientBorderBackgroundDivVertical, boxGradientBorderBackgroundSpanVertical } from '../globalStyles';

  const NumberingText = styled.h2`
  font-family: Orbitron;
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
  color: ${({ theme }) => theme.colors.primary};
`

const MainContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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

const ReasonItem = boxGradientBorderBackgroundDivVertical(80, null);

const ReasonText = boxGradientBorderBackgroundSpanVertical

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