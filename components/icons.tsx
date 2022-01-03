import type { NextPage } from 'next'
import styled from 'styled-components'
import { FaDiscord } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 5%;
    height: 15%;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    @media screen and (min-width: 768px) {
        width: 10%;
        height: 20;
    }
`

const Discord = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        color: #9680E7;
    }
`

const Twitter = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        color: #26A4F2;
    }
`

const openLink = (link: string): void => {
    window.open(link, "_blank")
} 

const Icons: NextPage = () => {

    return (
       <IconsContainer>
           <Discord onClick={() => openLink('https://discord.gg/GqPVHwVdE2')}><FaDiscord/></Discord>
           <Twitter onClick={() => openLink('https://twitter.com/Galaxityio')}><FaTwitter/></Twitter>
       </IconsContainer>
    )

}

export default Icons