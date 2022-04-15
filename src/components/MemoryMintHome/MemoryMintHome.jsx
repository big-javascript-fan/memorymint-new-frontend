import React from "react";
import {
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWarpper,
  Img,
  Button,
  Scroll,
  SocialContainer,
} from "./MemoryMintHome.elements";
import leftSideImg from "../../assets/img/sergey-vinogradov.png";
import ScrollIcon from "../common/icons/ScrollIcon";
import SocialIcons from "../common/SocialIcons";
import { Link } from "react-router-dom";

const MemoryMintHome = () => {
  const scrollTo = (elem) => {
    const anchor = document.querySelector(`#${elem}`);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>Memory Mint</Heading>
            <Subtitle>MEMORIES FADE. NFT'S DON'T.</Subtitle>
            <Link to="/sale">
              <Button>Pre-sale is live now</Button>
            </Link>
          </TextWrapper>
          <Scroll onClick={() => scrollTo("footer")}>
              <ScrollIcon />
          </Scroll>
        </InfoColumn>
        <ImgWarpper>
          <Img src={leftSideImg} />
          <SocialContainer>
            <SocialIcons />
          </SocialContainer>
        </ImgWarpper>
      </InfoRow>
    </Container>
  );
};

export default MemoryMintHome;
