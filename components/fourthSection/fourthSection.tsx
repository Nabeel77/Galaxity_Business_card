import type { NextPage } from 'next'
import styled from 'styled-components'
import 'aos/dist/aos.css'

const FourthSectionContainer = styled.div`
    width: 170vw;
    position: relative;
    top: -5rem;
    bottom: 0px;
    @media screen and (min-width: 1024px) {
        top: -2rem;
        width: 120vw;
    }
    @media screen and (min-width: 1100px) {
        width: 100vw;
        top: 10em;
    }
    @media screen and (min-width: 1400px) {
        top: 18em;
    }
`

const BackgroundImage = styled.img `
  position: absolute;
  width: 25rem;
  height: 25rem;
  left: -5.5rem;
  @media screen and (min-width: 768px) {
    width: 50rem;
    height: 45rem;
    left: -9rem;
  }
  @media screen and (min-width: 768px) {
    width: 70rem;
    height: 60rem;
    left: -17rem;
  }
`
const MintedNftsBox = styled.div `
    width: 70%;
    position: absolute;
    left: 8rem;
    top: 8rem;
    height: auto;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 55%;
        height: 15rem;
        left: 17.5rem;
        top: 24rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 73%;
        left: 20.5rem;
        top: 18rem;
    }
    @media only screen and (min-width: 1100px) {
        width: 42%;
        height: 20.1rem;
        top: 22rem;
    }
    @media only screen and (min-width: 1400px) {
        width: 35%;
    }
  `

  const MintedNftsBoxSpan = styled.span `
    font-family: Orbitron;
    padding: 15px 3px 0 7px;
    font-size: 25px;
    color: #707070;
    text-align: left;
    letter-spacing: 0.6em;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 11.8rem;
    color: white;
    @media screen and (min-width: 768px) {
        padding: 30px 0 0 100px;
        font-size: 33px;
        height: 14.8rem;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
    @media only screen and (min-width: 1100px) {
        height: 19.9rem;
        letter-spacing: 0.5em;
        font-size: 34px;
        padding-top: 51px;
    }
    @media only screen and (min-width: 1400px) {
        height: 19.9rem;
        font-size: 40px;
        padding-top: 15px;
    }
`
const NftNumberSpanText = styled.span `
color: ${({ theme }) => theme.colors.primary};
`

const FourthSection: NextPage = () => {

    return (
        <FourthSectionContainer data-aos="zoom-in">
            <BackgroundImage alt="gala-bot" src="/images/section_four_bg.png"/>
            <MintedNftsBox>
                <MintedNftsBoxSpan>Over <NftNumberSpanText>{`1000 NFT'S`}</NftNumberSpanText> Minted before minting was available</MintedNftsBoxSpan>
            </MintedNftsBox>
        </FourthSectionContainer>
    )
}

export default FourthSection;