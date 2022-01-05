import type { NextPage } from 'next'
import styled from 'styled-components'
import { teamListArr, teamNames } from '../data/teamData';
import { boxGradientBorderBackgroundSpanVertical } from '../globalStyles';


const MainContainer = styled.div `
  display: flex;
  width: 100%;
  height: max-content;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 50%;
   }
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    margin-top: -100px;
    margin-left: 50px;
  }
  @media screen and (min-width: 1400px) {
    margin-top: -200px;
  }
`

const TeamContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 786px) {
     
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
    width: 30%;
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
  height: 80%;
  padding: 1px 1px 0 1px;
  background: linear-gradient(to bottom, #41FFFF,#000000);
  border-radius: 17px;
  @media screen and (min-width: 768px) {
    width:  60%;
    height: 60%;
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
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
   }

   @media screen and (min-width: 768px) {
    font-size: 25px;
   }
`

const TeamItemBackground = styled.div `
    font-family: Orbitron;
    padding: 17px 0 0 0px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 100%;
`

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