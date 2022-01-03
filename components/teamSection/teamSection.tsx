import type { NextPage } from 'next'
import styled from 'styled-components'
import TeamList from './teamList'
import 'aos/dist/aos.css'

const TeamSectionContainer = styled.div`
    position: relative;
    top: 25em;
    left:0;
    padding: 2em 2em;
    width: 20rem;
    height: max-content;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 96vw;
        top: 60em;
        left: 60px;
    }
    @media screen and (min-width: 1024px) {
      width: 90vw;
      top: 50em;
  }
  @media only screen and (min-width: 1200px) {
    top: 70em;
  }
  @media only screen and (min-width: 1400px) {
    top: 80em;
  }
`

const TheTeamText  = styled.p `
    font-family: Orbitron;
    font-size: 25px;
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
  width: 40rem;
  height: 75rem;
  left: -5.5rem;
  top: 1rem;
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
  width: 100%;
  height: 25rem;
  padding: 2rem 1rem;
  position: absolute;
  top: 7rem;
  @media screen and (min-width: 768px) {
    top: 15rem;
  }
  @media screen and (min-width: 1024px) {
    top: 15rem;
  }
  @media screen and (min-width: 1400px) {
    left: -6rem;
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