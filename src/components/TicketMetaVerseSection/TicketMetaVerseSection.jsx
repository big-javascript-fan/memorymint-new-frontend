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
  GradientContainer,
} from "./TicketMetaVerseSection.elements";
import leftSideImg from "../../assets/img/img2.png";

const TicketMetaVerseSection = () => {
  return (
    <Container>
      <GradientContainer>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>YOUR TICKET TO THE METAVERSE</Heading>
              <Subtitle>
                Unique, one-of-a-kind memories, preserved as immersive virtual
                reality experiences, individually minted on the blockchain.
              </Subtitle>
              <ListContainer>
                <List>
                  Customize your own WebXR Environment to create your ultimate
                  home in the Metaverse.
                </List>
                <List>
                  Holding a Memory Mint NFT entitles its owner to their own
                  Memory Mint Vault in which to showcase their collection.
                </List>
                <List>
                  Memory Vaults are 3D WebXR environments where users are
                  represented by avatars. They can be accessed via desktop
                  computer, mobile device or—best of all—a virtual reality
                  headset.
                </List>
                <List>
                  Link your Memory Vault to those of friends, family and others
                  you meet in the Metaverse.
                </List>
              </ListContainer>
              <Button>Experience sample Memory Vault</Button>
            </TextWrapper>
          </InfoColumn>
          <ImgWarpper>
            <Img src={leftSideImg} />
          </ImgWarpper>
        </InfoRow>
      </GradientContainer>
    </Container>
  );
};

export default TicketMetaVerseSection;
