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
`

const Discord = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
`

const Twitter = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
`

const Icons: NextPage = () => {

    return (
       <IconsContainer>
           <Discord><FaDiscord/></Discord>
           <Twitter><FaTwitter/></Twitter>
       </IconsContainer>
    )

}

export default Icons