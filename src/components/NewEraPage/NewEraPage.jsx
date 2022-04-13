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
} from "./NewEraPage.elements";
import img1 from '../../assets/group-images/img1.png'
const NewEraPage = () => {
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TextWrapper>
            <Heading>ANNOUNCING A NEW ERA IN NFTS</Heading>
            <Subtitle>
              Unique, one-of-a-kind memories, preserved as immersive virtual
              reality experiences, individually minted on the blockchain.
            </Subtitle>
          </TextWrapper>
        </InfoColumn>
        <ImgWarpper>
          <Img src={img1}/>
        </ImgWarpper>
      </InfoRow>
    </Container>
  );
};

export default NewEraPage;
