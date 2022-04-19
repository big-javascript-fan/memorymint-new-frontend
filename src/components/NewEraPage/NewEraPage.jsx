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
  GradientContainer,
} from "./NewEraPage.elements";
import img1 from "../../assets/group-images/img1.png";
import img2 from "../../assets/group-images/img2.png";
import img3 from "../../assets/group-images/img3.png";

const NewEraPage = () => {
  return (
    <Container>
      <GradientContainer>
        <InfoRow
          style={{
            justifyContent: 'space-between'
          }}
        >
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
            <Img src={img1} />
          </ImgWarpper>
        </InfoRow>
        <InfoRow
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ImgWarpper style={{ marginBottom: "30px" }}>
            <Img src={img2}  />
          </ImgWarpper>
          <ImgWarpper>
            <Img src={img3} />
          </ImgWarpper>
        </InfoRow>
      </GradientContainer>
    </Container>
  );
};

export default NewEraPage;
