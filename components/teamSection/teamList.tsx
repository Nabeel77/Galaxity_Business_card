import type { NextPage } from 'next'
import styled from 'styled-components'
import { teamListArr } from '../data/teamData';
import { boxGradientBorderBackgroundDivVertical, boxGradientBorderBackgroundSpanVertical } from '../globalStyles';


const MainContainer = styled.div `
  display: flex;
  width: 128vw;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1024px) {
    width: 120vw;
  }
  @media screen and (min-width: 1200px) {
    width: 96vw;
  }
`

const ReasonsContainer = styled.div `
    width: 50%;
    @media screen and (min-width: 786px) {
    margin-left: 19px;
    width: 20%;
  }
`

const LibauGalaBot = styled.img `
  width: 100%;
  height: 100%;
`

const TeamItem = boxGradientBorderBackgroundDivVertical(80, null);

const TeamItemBackground = boxGradientBorderBackgroundSpanVertical

const TeamList: NextPage = () => {

    return (
        <MainContainer>
            {teamListArr.map((item, index) => (
              <ReasonsContainer key={index}>
                <TeamItem>
                  <TeamItemBackground>
                      <LibauGalaBot src={item.imageSrc} alt='gala-bot'/>
                  </TeamItemBackground>
                </TeamItem>
              </ReasonsContainer>
            ))}
        </MainContainer>
      )
}

export default TeamList;