import type { NextPage } from 'next'
import styled from 'styled-components'

const RoadmapContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    width: 107%;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

const RoadmapListBoxContainer  = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
`

const RoadmapListBox = styled.div `
    margin-top: 25px;
    width: 100%;
    height: 9vh;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 1100px) {
        margin-top: 40px;
    }
    @media screen and (min-width: 1400px) {
        margin-top: 55px;
    }
    
  `

  const RoadmapListBoxSpan = styled.span `
    font-family: Raleway-ExtraLight;
    padding: 17px 3px 0 7px;
    font-size: 20px;
    color: #707070;
    text-align: left;
    display: flex;
    align-items: center;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 8.7vh;
    color: white;
    @media screen and (min-width: 768px) {
        padding-left: 50px;
        padding-top: 30px;
        font-size: 4.5vw;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 50px;
        padding-top: 20px;
        font-size: 1.2vw;
    }
`
const Circle = styled.img `
    position: relative;
    width: 70px;
    height: 70px;
    left: -11px;
    top: 14px;
    @media screen and (min-width: 768px) {
        left: 13px;
        width: 90px;
        height: 90px;
    }
    @media screen and (min-width: 1100px) {
        top: 30px;
        left: 20px
    }
    @media screen and (min-width: 1400px) {
        top: 40px;
        left: 20px
    }
`
const QuarterText = styled.h3 `
    position: absolute;
    left: 13px;
    top: 20px;
    font-family: Orbitron;
    font-size: 18px;
    color: white;
    @media screen and (min-width: 768px) {
        left: 40px;
        font-size: 23px;
    }
    @media screen and (min-width: 1100px) {
        top: 35px;
        left: 50px;
    }
    @media screen and (min-width: 1400px) {
        top: 45px;  
    }
`
    
type roadmapList = {
    roadmapListArray: string[],
    QuarterText: string
}

const RoadmapList = (props: roadmapList) => {

    const content = 
    <RoadmapContentContainer>
        <Circle alt="road-map-circle" src="/images/circle.png" />
        <QuarterText>{props.QuarterText}</QuarterText>
        <RoadmapListBoxContainer>
            {props.roadmapListArray.map((task: string, index: number) => {
                return (
                    <RoadmapListBox  key={index}>
                        <RoadmapListBoxSpan>{task}</RoadmapListBoxSpan>
                    </RoadmapListBox>
                )
            })}
        </RoadmapListBoxContainer>
    </RoadmapContentContainer>
    return (
        <>
            {content}
        </>
    );

}

export default RoadmapList;