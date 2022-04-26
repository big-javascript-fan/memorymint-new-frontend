import React from "react";
import {
  Container,
  Card,
  IconSec,
  DescriptionSec,
  TitleSec,
  SubContainer,
  GradientContainer
} from "./OtherThanNFTCardSection.elements";
import { Card as ExperienceCard, TitleSec as ExperienceTitleSec, Button } from "../ExperienceSection/ExperienceSection.elements";
import CameraIcon from "../common/icons/CameraIcon";
import EyeIcon from "../common/icons/EyeIcon";
import TSixtyIcon from "../common/icons/TSixtyIcon";
const OtherThanNFTCardSection = () => {
  const data = [
    {
      icon: "camera",
      description:
        "Memory Mint NFTs are specially designed spherical meshes with 360-video images baked in.",
    },
    {
      icon: "eye",
      description:
        "Mesmerizing and hypnotic just to look at, the real magic happens when you click on the nameplate.",
    },
    {
      icon: "360",
      description:
        "A simple click transports you into the sphere, where you can experience the memory in all 360-degrees.",
    },
  ];
  return (
    <Container>
      <GradientContainer>
          <TitleSec>They're Not Just NFTs</TitleSec>
          <ExperienceCard>
            <ExperienceTitleSec>They're Experiences</ExperienceTitleSec>
            <Button onClick={() => {
              // TODO: Handle Click
            }}>Launch sample</Button>
          </ExperienceCard>
          <SubContainer>
        {data.map((d) => {
          return (
            <Card>
              <IconSec>
                {d.icon === 'camera' && <CameraIcon/>}
                {d.icon === 'eye' && <EyeIcon/>}
                {d.icon === '360' && <TSixtyIcon/>}
              </IconSec>
              <DescriptionSec>{d.description}</DescriptionSec>
            </Card>
          );
        })}
        </SubContainer>
      </GradientContainer>
    </Container>
  );
};

export default OtherThanNFTCardSection;
