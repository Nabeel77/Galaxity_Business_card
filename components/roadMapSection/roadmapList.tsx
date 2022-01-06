import type { NextPage } from 'next'
import styled from 'styled-components'

const RoadmapContentContainer = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
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
    height: max-content;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 15px;
    @media screen and (min-width: 1100px) {
        margin-top: 30px;
        width: 90%;
    }
    @media screen and (min-width: 1400px) {
        margin-top: 45px;
    }
    
  `

  const RoadmapListBoxSpan = styled.span `
    font-family: Raleway-ExtraLight;
    padding: 17px 3px 17px 7px;
    font-size: 12px;
    color: #707070;
    text-align: left;
    display: flex;
    align-items: center;
    background: #000;
    display: block;
    border-radius: 15px;
    width: 100%;
    height: auto;
    color: white;
    @media screen and (min-width: 768px) {
        padding-left: 50px;
        padding-top: 30px;
        font-size: 20px;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 50px;
        padding-top: 20px;
        font-size: 1.1vw;
    }
`
const CircleContainer = styled.div `
    position: relative;
    width: 60px;
    height: 60px;
    left: -11px;
    @media screen and (min-width: 768px) {
        left: 13px;
        width: 90px;
        height: 90px;
    }
    @media screen and (min-width: 1100px) {
        top: 15px;
        left: 11px
    }
    @media screen and (min-width: 1400px) {
        top: 25px;
        left: 20px
    }
`

const Circle = styled.img `
    object-fit: contain;
    width: 100%;
    height: 100%;
`
const QuarterText = styled.p.attrs((props: {text: string}) => props) `
    margin-left: ${(props) => props.text === 'Q1' ? '19px' : '16px'};
    margin-top: -47px;
    font-family: Orbitron;
    font-weight: 100;
    font-size: 18px;
    color: white;
    @media screen and (min-width: 768px) {
        margin-top: -64px;
        margin-left: ${(props) => props.text === 'Q1' ? '29px' : '26px'};
        font-size: 24px;
    }
    @media screen and (min-width: 1024px) {
        margin-top: -64px;
        margin-left: ${(props) => props.text === 'Q1' ? '24px' : '21px'};
    }
    @media screen and (min-width: 1400px) {
        margin-top: -65px;
        margin-left: ${(props) => props.text === 'Q1' ? '25px' : '21px'};
    }
`
    
type roadmapList = {
    roadmapListArray: string[],
    QuarterText: string
}

const RoadmapList = (props: roadmapList) => {

    const content = 
    <RoadmapContentContainer>
        <CircleContainer>
        <Circle alt="road-map-circle" src="/images/circle.png" />
        <QuarterText text={props.QuarterText}>{props.QuarterText}</QuarterText>
        </CircleContainer>
        
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