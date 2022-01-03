import 'aos/dist/aos.css'
import type { NextPage } from 'next'
import styled from 'styled-components'
import RoadmapList from './roadmapList';
import { Q4List, Q1List } from '../data/roadmapListContent';
import 'aos/dist/aos.css'

const RoadmapContiner = styled.div `
    position: relative;
    top: 25em;
    left:25px;
    padding: 2em 1em;
    width: 36rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 160vw;
        left: 65px;
        top: 60em;
    }
    @media only screen and (min-width: 1024px) {
        top: 50em;
        width: 120vw;
    }
    @media only screen and (min-width: 1200px) {
        width: 93vw;
        left: 3em;
        top: 70em;
    }
    @media only screen and (min-width: 1400px) {
        width: 93vw;
        left: 3em;
        top: 80em;
    }
`

const RoadmapText  = styled.p `
    font-family: Orbitron;
    font-size: 25px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        margin-left: 25px;
        font-size: 45px;
    }
    @media screen and (min-width: 1100px) {
        font-size: 45px;
    }

    @media screen and (min-width: 1400px) {
        font-size: 55px;
    }
`

const RoadmapListsParentContainer = styled.div `
    display: flex;
    flex-direction: column;
    jsutify-content: space-between;
    @media screen and (min-width: 1100px) {
        flex-direction: row;
        margin-top: 40px;
    }
    @media screen and (min-width: 1300px) {
        margin-top: 70px;
    }
`

const SingleRoadmapListContainer = styled.div `
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
    }
`



const RoadMap: NextPage = () => {

    return (
        <RoadmapContiner>
            <RoadmapText>Roadmap</RoadmapText>
            <RoadmapListsParentContainer>
            <SingleRoadmapListContainer>
                <RoadmapList roadmapListArray={Q4List} QuarterText={'Q4'}/>
            </SingleRoadmapListContainer>
            <SingleRoadmapListContainer> 
                <RoadmapList roadmapListArray={Q1List} QuarterText={'Q1'}/>
            </SingleRoadmapListContainer>
            </RoadmapListsParentContainer>
        </RoadmapContiner>
    )

}

export default RoadMap;