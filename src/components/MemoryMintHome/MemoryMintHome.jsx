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
  SocialContainer
} from "./MemoryMintHome.elements";
import leftSideImg from "../../assets/img/sergey-vinogradov.png";
import ScrollIcon from '../common/icons/ScrollIcon';
import SocialIcons from '../common/SocialIcons'
const MemoryMintHome = () => {
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>Memory Mint</Heading>
            <Subtitle>MEMORIES FADE. NFT'S DON'T.</Subtitle>
            <Button>Pre-sale is live now</Button>
          </TextWrapper>
          <Scroll>
              <ScrollIcon onClick = {() => {
                // TODO: Click handler
              }}/>
          </Scroll>
        </InfoColumn>
        <ImgWarpper>
          <Img src={leftSideImg} />
          <SocialContainer>
            <SocialIcons/>
          </SocialContainer>
        </ImgWarpper>
      </InfoRow>
    </Container>
  );
};

export default MemoryMintHome;