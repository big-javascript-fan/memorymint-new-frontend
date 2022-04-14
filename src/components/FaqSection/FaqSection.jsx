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
  ListContainer,
  List,
} from "./FaqSection.elements";
const FaqSection = () => {
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>FAQ</Heading>
            <Subtitle>WHAT BLOCKCHAIN ARE MEMORY MINTS MINTED ON?</Subtitle>
            <Subtitle>
              WHAT’S THE DIFFERENCE BETWEEN A MEMORY, A DREAM AND AN EXPERIENCE?
            </Subtitle>
            <Subtitle>WHAT IS A MEMORY MINT?</Subtitle>
            <Subtitle>WHAT’S AN IMMERSIVE NFT?</Subtitle>
            <Subtitle>HOW DO YOU MAKE AN IMMERSIVE NFT?</Subtitle>
          </TextWrapper>
        </InfoColumn>
        <ImgWarpper>
          <Img  />
        </ImgWarpper>
      </InfoRow>
    </Container>
  );
};

export default FaqSection;
