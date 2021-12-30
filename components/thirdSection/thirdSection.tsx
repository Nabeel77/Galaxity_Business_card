import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import styled from 'styled-components'
import { tweets } from '../data/tweets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'aos/dist/aos.css'

const ThirdSectionConttainer = styled.div `
    width: 170vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: max-content;
    padding: 2em 2em;
    position: relative;
    top: -7em;
    @media screen and (min-width: 1024px) {
        width: 96vw;
        left: 3em;
    }
    @media screen and (min-width: 1100px) {
        top: -2em;
    }
    @media screen and (min-width: 1400px) {
        top: 4em;
    }
`

const NeverEndingTexttContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    width: content-wrap;
    height: content-wrap;

`

const NeverEndingText = styled.p `
    font-family: Orbitron;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin: ${({ theme }) => theme.centerChildStyle.margin}; 
    font-size: 15px;
    letter-spacing: 0.6em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
    @media screen and (min-width: 1100px) {
        font-size: 45px;
    }
`

const TweetsContainer = styled.div `
    width: 100%;
    position: relative;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    left: 25px;
    top: 14px; 
    height: 6rem;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 90%;
        height: 10rem;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 40px;
        height: 14rem;
    }
  `

  const TweetsContainerSpan = styled.span `
    font-family: Orbitron;
    padding: 17px 3px 5px 7px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 100%;
`
const CarousalContainer = styled.div`
    width: 98%;
    height: 100%;
    margin-top: -10px;
    @media screen and (min-width: 1024px) {
        margin-top: 20px;
    }
`

const Tweet = styled.div `
    width: 10rem;
    height: 5rem;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;  
    @media screen and (min-width: 1024px) {
       height: 9rem;
    }
`

const Rectangle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${props => props.img});
    background-size: cover;
    @media screen and (min-width: 800px) {
        width: 100%;
    }
`

const TweetImg = styled.img `
    width: 70%;
    margin: 0 auto;
    height: 100%;
    border-radius: 20px;
    @media screen and (min-width: 769px) {
        width: 95%;
    }
`

const ThirdSection: NextPage = () => {

    const [width, setWidth] = useState(0);
    const [settings, setSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        className: 'notes-slider',
        autoplay: true,
        autoplaySpeed: 12000,
      });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }, [])

    console.log(width);

    useEffect(() => {

        setSettings({
            ...settings,
            slidesToShow: width >= 1300 ? 3 : width > 768 && width < 1300 ? 2 : 1
        })

    }, [width])

    return (
        <ThirdSectionConttainer data-aos="zoom-in">
            <NeverEndingTexttContainer>
                <NeverEndingText>Never Ending Battle</NeverEndingText>
            </NeverEndingTexttContainer>
            <TweetsContainer>
                <TweetsContainerSpan> 
                <CarousalContainer>
                <Slider dots={true} {...settings}>
                        
                        {tweets.map((item, index )=> (
                            <Tweet  key={index} > 
                                <Rectangle img={"/images/rectangle.png"}>
                                    <TweetImg src={item}/>
                                </Rectangle>
                            </Tweet>
                        ))}
                </Slider>
                </CarousalContainer>
                </TweetsContainerSpan>
                
            </TweetsContainer>
            
        </ThirdSectionConttainer>
      
    )
}

export default ThirdSection;