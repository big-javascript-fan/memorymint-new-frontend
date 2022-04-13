import React from 'react'
import styled from "styled-components";
import BG from '../../assets/img/Bgimage1.png';
import sergeyImg from '../../assets/img/sergey-vinogradov.png'
const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Content = styled.div`
 color: #fff;
`

const SocialIcons= styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  :hover {
    transform:scale(1.25, 1.25);
  }
  
`

const HeroSection = () => {
  return (
    <Container style={{backgroundImage: `url (${BG})`}}>
    </Container>
  )
}

export default HeroSection