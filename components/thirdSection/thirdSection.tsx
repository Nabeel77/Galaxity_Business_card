import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import styled from 'styled-components'
import { tweets } from '../data/tweets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'aos/dist/aos.css'

interface StyleProps {
    img?: string;
}

const ThirdSectionConttainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: max-content;
    padding: 2em 2em;
    @media screen and (min-width: 1024px) {
        margin-top: 80px;
    }
`

const NeverEndingTexttContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: content-wrap;
    height: content-wrap;
    margin-left: 5px;
    @media screen and (min-width: 1024px) {
        margin-left: 60px;
    }

`
const NeverEndingText = styled.p`
    font-family: Orbitron;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin: ${({ theme }) => theme.centerChildStyle.margin}; 
    font-size: 12px;
    letter-spacing: 0.6em;
    text-align: left;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1100px) {
        font-size: 40px;
    }
`

const TweetsContainer = styled.div`
    width: 100%;
    display: ${({ theme }) => theme.centerChildStyle.inlineBlock}; 
    margin-left: 5px;
    margin-top: 14px; 
    height: 5rem;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 90%;
        height: 15vh;
    }
    @media screen and (min-width: 1024px) {
        margin-top: 40px;
        height: 14rem;
        margin-left: 50px;
    }
    @media screen and (min-width: 1400px) {
        margin-left: 70px;
    }
  `

const TweetsContainerSpan = styled.span`
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

const Tweet = styled.div`
    width: 100%;
    height: 40%;
    padding-left: 20px;
    padding-right: 20px; 
    @media screen and (min-width: 1024px) {
       height: 9rem;
    }
`

const Rectangle = styled.div<StyleProps>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(${props => props.img});
    background-size: cover;
    @media screen and (min-width: 800px) {
    }
`

const TweetImg = styled.img`
    object-fit: contain;
    width: 85%;
    margin: 0 auto;
    height: 100%;
    border-radius: 20px;
    @media screen and (min-width: 769px) {
        width: 95%;
    }
`

const ThirdSection: NextPage = () => {

    const [slidesToShow, setSlidesToShow] = useState(1);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        className: 'notes-slider',
        autoplay: true,
        autoplaySpeed: 12000,
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1300 ) {
                setSlidesToShow(3);
            } else if (window.innerWidth > 768 && window.innerWidth < 1300) {
                setSlidesToShow(2);
            }
        }
    }, [])

    return (
        <ThirdSectionConttainer >
            <NeverEndingTexttContainer>
                <NeverEndingText>Never Ending Battle</NeverEndingText>
            </NeverEndingTexttContainer>
            <TweetsContainer>
                <TweetsContainerSpan>
                    <CarousalContainer>
                        <Slider dots={true} {...settings}>

                            {tweets.map((item, index) => (
                                <Tweet key={index} >
                                    <Rectangle img={"/images/rectangle.png"}>
                                        <TweetImg src={item} />
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