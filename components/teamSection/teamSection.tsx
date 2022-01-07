import type { NextPage } from 'next'
import styled from 'styled-components'
import TeamList from './teamList'
import 'aos/dist/aos.css'

const TeamSectionContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 1em 1em 2em;
    height: max-content;
    justify-content: space-between;
    @media screen and (min-width: 1100px) {
  }

`

const TheTeamText  = styled.p `
    font-family: Orbitron;
    font-size: 5vw;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    margin-top: 10px;
    position: relative;
    @media screen and (min-width: 768px) {
        font-size: 4vw;
        margin-top: 80px;
        margin-left: 15px;
    }
    @media screen and (min-width: 1100px) {
      font-size: 2.8vw;
      margin-top: 90px;
      margin-left: 65px;
    }
    @media screen and (min-width: 1600px) {
      margin-left: 170px;
    }
`


const TeamSectionBackground = styled.img `
  position: absolute;
  width: 100%;
  height: 80vh;
  left: -40px;
  top: -40px;
  @media screen and (min-width: 768px) {
    left: -20px;
    height: 120vh;
  }
  @media only screen and (min-width: 1024px) {
    object-fit: contain;
    top: -210px;
    left: -125px;
   }
   @media only screen and (min-width: 1200px) {
    object-fit: contain;
    height: 140vh;
    top: 10px;
    left: -225px;
   }
  @media screen and (min-width: 1600px) {
   left: -450px;
  }
`

const TeamCardsContainer = styled.div `
  position: relative;
  width: 98%;
  height: max-content;
  top: 30px;
  z-index: 999;
  @media screen and (min-width: 768px) {
    top: 110px;
  }
  @media screen and (min-width: 1024px) {
   left: 0px;
   top: 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 0 50px 0 50px;
    top: 110px;
  }

  
`;

const TheTeam: NextPage = () => {

    return (
        <TeamSectionContainer> 
            <TheTeamText>The Team</TheTeamText>
            <TeamSectionBackground alt="team-background" src="/images/team_background.png" />
            <TeamCardsContainer> 
              <TeamList />
            </TeamCardsContainer>
        </TeamSectionContainer>
    )

}

export default TheTeam;