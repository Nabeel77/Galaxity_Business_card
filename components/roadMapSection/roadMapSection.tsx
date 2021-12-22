import type { NextPage } from 'next'
import styled from 'styled-components'
import RoadmapList from './roadmapList';
import { Q4List, Q1List } from '../data/roadmapListContent';

const RoadmapContiner = styled.div `
    position: relative;
    top: 18em;
    left:25px;
    padding: 2em 1em;
    width: 128vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        width: 120vw;
        top: 40em;
    }
    @media only screen and (min-width: 1024px) {
        width: 120vw;
    }
    @media only screen and (min-width: 1200px) {
        width: 100vw;
        left:0px;
    }
`

const RoadmapText  = styled.p `
    font-family: Orbitron;
    font-size: 15px;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock};  
    letter-spacing: 0.5em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        margin-left: 25px;
        font-size: 30px;
    }
`

const RoadmapListsParentContainer = styled.div `
    display: flex;
    flex-direction: column;
    jsutify-content: space-between;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
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