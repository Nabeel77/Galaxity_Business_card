import type { NextPage } from 'next'
import styled from 'styled-components'
import TeamList from './teamList'
import 'aos/dist/aos.css'

const TeamSectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: max-content;
    justify-content: space-between;

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
    @media screen and (min-width: 1400px) {
      font-size: 55px;
    }
`

const TeamSectionBackground = styled.img `
  position: absolute;
  width: 100%;
  height: 100%;
  left: -40px;
  top: 10px;
  @media screen and (min-width: 768px) {
    width: 60rem;
    height: 60rem;
    left: -9rem;
  }
  @media screen and (min-width: 1200px) {
    width: 70rem;
   }
  @media screen and (min-width: 1400px) {
    width: 95rem;
    height: 85rem;
  }
`

const TeamCardsContainer = styled.div `
  width: 98%;
  height: max-content;
  margin-top: 30px;
  @media screen and (min-width: 1024px) {
    margin-left: 0px;
    margin-top: 110px;
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