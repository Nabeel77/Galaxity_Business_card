import type { NextPage } from 'next'
import styled from 'styled-components'
import TeamList from './teamList'

const TeamSectionContainer = styled.div`
    position: relative;
    top: 18em;
    left:0;
    padding: 2em 2em;
    width: 108vw;
    height: max-content;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 96vw;
        top: 40em;
    }
`

const TheTeamText  = styled.p `
    font-family: Orbitron;
    font-size: 15px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        margin-left: 40px;
        font-size: 45px;
    }
`

const TeamSectionBackground = styled.img `
  position: absolute;
  width: 25rem;
  height: 25rem;
  left: -5.5rem;
  top: 1rem;
  @media screen and (min-width: 768px) {
    width: 60rem;
    height: 60rem;
    left: -9rem;
  }
`

const TeamCardsContainer = styled.div `
  width: 100%;
  height: 25rem;
  padding: 2rem 1rem;
  position: absolute;
  top: 7rem;
  @media screen and (min-width: 768px) {
    top: 15rem;
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