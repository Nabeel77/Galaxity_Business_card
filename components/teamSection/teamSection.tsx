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
      padding: 0 50px 0 50px;
  }

`

const TheTeamText  = styled.p `
    font-family: Orbitron;
    font-size: 18px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    position: relative;
    left: 1rem;
    @media screen and (min-width: 768px) {
        margin-left: -15px;
        font-size: 45px;
    }
    @media screen and (min-width: 1100px) {
      margin-left: 35px;
    }
    @media screen and (min-width: 1400px) {
      margin-left: 105px;
      font-size: 55px;
    }
`

const TeamSectionBackground = styled.img `
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  left: -40px;
  top: 10px;
  z-index: 0;
  @media screen and (min-width: 768px) {
    left: -20px;
    height: 85vh;
  }
  @media only screen and (min-width: 1024px) {
    height: 120vh;
    left: -300px;
   }
  @media screen and (min-width: 1400px) {
   left: -500px;
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
  @media screen and (min-width: 1400px) {
    padding: 0 90px 0 90px;
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