import type { NextPage } from 'next'
import styled from 'styled-components'

const FourthSectionContainer = styled.div`
    width: 140vw;
    position: relative;
    top: -7rem;
    bottom: 0px;
    @media screen and (min-width: 1024px) {
        width: 120vw;
    }
    @media screen and (min-width: 1200px) {
        width: 100vw;
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
`
const MintedNftsBox = styled.div `
    width: 65%;
    position: absolute;
    left: 7rem;
    top: 8rem;
    height: auto;
    padding: 1px 1px 1px 0;
    background: linear-gradient(to left, #126060,#000000);
    border-radius: 17px;
    @media screen and (min-width: 768px) {
        width: 65%;
        height: auto;
        left: 17.5rem;
        top: 18rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 73%;
        left: 20.5rem;
        top: 18rem;
    }
  `

  const MintedNftsBoxSpan = styled.span `
    font-family: Orbitron;
    padding: 15px 3px 0 7px;
    font-size: 15px;
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
        padding: 20px 0 0 100px;
        font-size: 20px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 30px;
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
                <MintedNftsBoxSpan>Over <NftNumberSpanText>1000 NFTS</NftNumberSpanText> Minted before minting was available</MintedNftsBoxSpan>
            </MintedNftsBox>
        </FourthSectionContainer>
    )
}

export default FourthSection;