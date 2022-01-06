import type { NextPage } from 'next'
import styled from 'styled-components'
import 'aos/dist/aos.css'

const FourthSectionContainer = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    margin-top: 60px;
    @media screen and (min-width: 1100px) {
        margin-top: 100px;
    }
`

const BackgroundImage = styled.img `
  width: 100%;
  height: 50%;
  margin-left: -100px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    margin-left: -200px;
  }
  @media screen and (min-width: 1200px) {
    width: 65%;
    margin-left: -150px;
  }
  @media screen and (min-width: 1400px) {
    width: 60%;
    margin-left: -230px;
  }
`
const MintedNftsBox = styled.div `
    width: 60%;
    position: absolute;
    margin-left: 30%;
    margin-top: -65%;
    height: 15vh;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #41FFFF,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 50%;
        height: 25vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 40%;
        margin-top: -60%;
        margin-left: 40%;
    }
    @media only screen and (min-width: 1200px) {
        height: 45vh;
        margin-left: 20%;
        margin-top: -40%;
        
    }
    @media only screen and (min-width: 1400px) {
        width: 35%;
    }
  `

  const MintedNftsBoxSpan = styled.div `
    font-family: Orbitron;
    font-weight: 100;
    padding: 15px 3px 15px 7px;
    font-size: 15px;
    color: #707070;
    text-align: left;
    letter-spacing: 0.6em;
    background: #000;
    display: block;
    border-radius: 17px;
    width: 100%;
    height: 99.9%;
    color: white;
    @media screen and (min-width: 768px) {
        padding-top: 20px;
        paddin-bottom: 0px;
        font-size: 27px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 28px;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 36px;
    }
    @media only screen and (min-width: 1400px) {
        font-size: 48px;
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