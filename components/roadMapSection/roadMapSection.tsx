import 'aos/dist/aos.css'
import type { NextPage } from 'next'
import styled from 'styled-components'
import RoadmapList from './roadmapList';
import { Q4List, Q1List } from '../data/roadmapListContent';
import 'aos/dist/aos.css'

const RoadmapContiner = styled.div `
    padding: 2em 1em;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    z-index: 999;
    justify-content: space-between;
    @media only screen and (min-width: 1024px) {
        margin-top: 50px;
    }
    @media only screen and (min-width: 1600px) {
        padding: 0 150px 0 150px;
        margin-top: 300px;
    }
`

const RoadmapText  = styled.p `
    font-family: Orbitron;
    font-size: 5vw;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    margin-left: 10px;
    @media screen and (min-width: 768px) {
        margin-left: 25px;
        font-size: 4vw;
    }
    @media screen and (min-width: 1100px) {
        font-size: 2.5vw;
        margin-left: 80px;
    }

    @media screen and (min-width: 1600px) {
        margin-left: 50px;
    }
`

const RoadmapListsParentContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    jsutify-content: space-between;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        margin-top: 40px;
    }
    @media screen and (min-width: 1600px) {
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