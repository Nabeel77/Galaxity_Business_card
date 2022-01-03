import type { NextPage } from 'next'
import styled from 'styled-components'
import { teamListArr, teamNames } from '../data/teamData';
import { boxGradientBorderBackgroundSpanVertical } from '../globalStyles';


const MainContainer = styled.div `
  display: flex;
  width: 37rem;
  height: 100vh;
  margin-top: 20px;
  margin-left: -35px;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: -80px;
    margin-left: 2px;
    height: 75vh;
   }
  @media screen and (min-width: 1024px) {
    width: 120vw;

  }
  @media screen and (min-width: 1200px) {
    width: 85vw;
    margin-top: -30px;
    margin-left: 80px;
  }
  @media screen and (min-width: 1400px) {
    justify-content: flex-start;
    margin-top: -80px;
    margin-left: 280px;
  }
`

const TeamContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 786px) {
     margin-left: 19px;
     width: 20%;
   }
   @media screen and (min-width: 1024px) {
    margin-left: 13px;
    width: 23%;
   }
   @media screen and (min-width: 1200px) {
    width: 21%;
   }
   @media screen and (min-width: 1400px) {
    margin-left: -110px;
    width: 31%;
    height: 65%;
    margin-top: 15rem;
   }
`

const LibauGalaBot = styled.img `
  width: 100%;
  height: 100%;
`

const TeamItem = styled.div `
  width:  80%;
  height: 18rem;
  padding: 1px 1px 0 1px;
  background: linear-gradient(to bottom, #41FFFF,#000000);
  border-radius: 17px;
  @media screen and (min-width: 768px) {
    width:  65%;
    height: 29rem;
   }
   @media screen and (min-width: 1024px) {
    width:  80%;
    height: 15rem;
   }
   @media screen and (min-width: 1100px) {
    width:  85%;
   }
   @media screen and (min-width: 1400px) {
    width:  65%;
    height: 90%;
   }
`;

const Name = styled.p `
  font-family: Raleway-Regular;
  margin-top: 20px;
  color: white;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
   }

   @media screen and (min-width: 768px) {
    font-size: 25px;
   }
`

const TeamItemBackground = boxGradientBorderBackgroundSpanVertical

const TeamList: NextPage = () => {

    return (
        <MainContainer>
            {teamListArr.map((item, index) => (
              <TeamContainer key={index}>
                <TeamItem>
                  <TeamItemBackground>
                      <LibauGalaBot src={item.imageSrc} alt='gala-bot'/>
                  </TeamItemBackground>
                </TeamItem>
                <Name>{teamNames[index]}</Name>
              </TeamContainer>
            ))}
        </MainContainer>
      )
}

export default TeamList;