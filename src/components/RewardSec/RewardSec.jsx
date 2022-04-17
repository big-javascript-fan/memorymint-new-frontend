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
  Paragraph,
  ImgContainer
} from "./RewardSec.elements";
import img4 from "../../assets/group-images/img4.png";
import img5 from "../../assets/group-images/img5.png";
import img6 from "../../assets/group-images/img6.png";
import img7 from "../../assets/group-images/img7.png";
import img8 from "../../assets/group-images/img8.png";
import img9 from "../../assets/group-images/img9.png";
const RewardSec = () => {
  const data = [
    {
      title: "Series Reward:",
      subtitle: "Complete an entire series and receive the following:",
      p1: "Special SERIES NFT awarded only to holders of complete series.",
      p2: "Access to Sommers Personal Memory Vault",
      p3: "Invitation to regular meet and greets with Sommer in her Memory Vault.",
      img1: img4,
      img2: img5,
      img3: img6,
    },
    {
      title: "Collection Reward:",
      subtitle:
        "Complete an entire colection and receive all of the above PLUS:",
      p1: "Special COLLECTION NFT awarded only to holders of the complete collection.",
      p2: "One-on-one chat sessions with Sommer",
      p3: "Invitation to regular meet and greets with Sommer in her Memory Vault.",
      img1: img7,
      img2: img8,
      img3: img9,
    },
  ];
  return (
    <>
      {data.map((d) => {
        return (
          <Container>
            <InfoRow style={{ width: "100%" }}>
              <InfoColumn>
                <TextWrapper>
                  <Heading>{d.title}</Heading>
                  <Subtitle>{d.subtitle}</Subtitle>
                  <Paragraph>{d.p1}</Paragraph>
                  <Paragraph>{d.p3}</Paragraph>
                  <Paragraph>{d.p3}</Paragraph>
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
            <InfoRow
              style={{
                display: "flex",
                marginLeft: "10px",
              }}
            >
              <ImgWarpper>
                <Img
                  src={d.img1}
                  // style={{ width: "283px", height: "283px" }}
                />
              </ImgWarpper>
              <ImgContainer>
                <ImgWarpper>
                  <Img
                    src={d.img2}
                    // style={{ width: "210px", height: "210px" }}
                    />
                </ImgWarpper>
                <ImgWarpper>
                  <Img
                    src={d.img3}
                    // style={{ width: "140px", height: "140px" }}
                    />
                </ImgWarpper>
              </ImgContainer>
            </InfoRow>
          </Container>
        );
      })}
    </>
  );
};

export default RewardSec;
