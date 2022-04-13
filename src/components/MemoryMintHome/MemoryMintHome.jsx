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
} from "./MemoryMintHome.elements";
import leftSideImg from "../../assets/img/sergey-vinogradov.png";

const MemoryMintHome = () => {
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>Memory Mint</Heading>
            <Subtitle>MEMORIES FADE. NFT'S DON'T.</Subtitle>
          </TextWrapper>
          <Button>Pre-sale is live now</Button>
        </InfoColumn>
        <ImgWarpper>
          <Img src={leftSideImg} />
        </ImgWarpper>
      </InfoRow>
    </Container>
  );
};

export default MemoryMintHome;
