import React from "react";
import {
  Container,
  Card,
  IconSec,
  DescriptionSec,
  TitleSec,
  SubContainer
} from "./OtherThanNFTCardSection.elements";
const OtherThanNFTCardSection = () => {
  const data = [
    {
      icon: "icon",
      description:
        "Memory Mint NFTs are specially designed spherical meshes with 360-video images baked in.",
    },
    {
      icon: "icon",
      description:
        "Mesmerizing and hypnotic just to look at, the real magic happens when you click on the nameplate.",
    },
    {
      icon: "icon",
      description:
        "A simple click transports you into the sphere, where you can experience the memory in all 360-degrees.",
    },
  ];
  return (
    <Container>
        <TitleSec>They're Not Just NFTs</TitleSec>
        <SubContainer>
      {data.map((d) => {
        return (
          <Card>
            <IconSec>{d.icon}</IconSec>
            <DescriptionSec>{d.description}</DescriptionSec>
          </Card>
        );
      })}
      </SubContainer>
    </Container>
  );
};

export default OtherThanNFTCardSection;
