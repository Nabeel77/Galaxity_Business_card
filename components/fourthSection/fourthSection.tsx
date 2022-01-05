import type { NextPage } from 'next'
import styled from 'styled-components'
import 'aos/dist/aos.css'

const FourthSectionContainer = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    margin-top: 60px;
    @media screen and (min-width: 1100px) {
        margin-top: 60px;
    }
    @media screen and (min-width: 1400px) {
        top: 18em;
    }
`

const BackgroundImage = styled.img `
  position: relative;
  width: 100%;
  height: 50%;
  left: -94px;
  @media screen and (min-width: 768px) {
    left: -170px;
  }
  @media screen and (min-width: 1024px) {
    width: 70%;
    left: -150px;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
    left: -230px;
  }
`
const MintedNftsBox = styled.div `
    width: 60%;
    position: absolute;
    left: 8em;
    top: 8em;
    height: auto;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 50%;
        height: 29.7%;
        left: 30%;
        top: 38%;
    }
    @media only screen and (min-width: 1024px) {
        width: 40%;
        left: 350px;
        
    }
    @media only screen and (min-width: 1400px) {
        width: 35%;
        top: 400px;
    }
  `

  const MintedNftsBoxSpan = styled.span `
    font-family: Orbitron;
    padding: 15px 3px 15px 7px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    letter-spacing: 0.6em;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: auto;
    color: white;
    @media screen and (min-width: 768px) {
        padding: 50px 0;
        font-size: 23px;
        height: 99.9%;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
    @media only screen and (min-width: 1100px) {
        letter-spacing: 0.5em;
        padding-top: 30px;
    }
    @media only screen and (min-width: 1400px) {
        font-size: 40px;
        padding-top: 55px;
    }
`
const NftNumberSpanText = styled.span `
color: ${({ theme }) => theme.colors.primary};
`

const FourthSection: NextPage = () => {

    return (
        <FourthSectionContainer>
            <BackgroundImage alt="gala-bot" src="/images/section_four_bg.png"/>
            <MintedNftsBox>
                <MintedNftsBoxSpan>Over <NftNumberSpanText>{`1000 NFT'S`}</NftNumberSpanText> Minted before minting was available</MintedNftsBoxSpan>
            </MintedNftsBox>
        </FourthSectionContainer>
    )
}

export default FourthSection;