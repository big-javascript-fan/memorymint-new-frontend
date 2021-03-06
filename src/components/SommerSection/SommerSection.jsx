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
  TopTitle,
  AboutSection,
  AboutTitle,
  AboutPara,
  ImgContainer,
} from "./SommerSection.elements";
import Img1 from "../../assets/img/SommerImg1.png";
import Img2 from "../../assets/img/SommerImg2.png";
import Img3 from "../../assets/img/SommerImg3.png";
import ScrollIcon from "../common/icons/ScrollIcon";
import SocialIcons from "../common/SocialIcons";
import { Link } from "react-router-dom";
const SommerSection = () => {
  const scrollTo = (elem) => {
    const anchor = document.querySelector(`#${elem}`);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <Container>
      <InfoRow>
        <InfoColumn>
          <TopTitle>THE MEMORY MINT</TopTitle>
          <TextWrapper>
            <Heading>The Sommer </Heading>
            <Subtitle>Shiels Collection</Subtitle>
          </TextWrapper>
          <AboutSection>
            <Scroll onClick={() => {}}>
              <ScrollIcon />
            </Scroll>
            <div>
              <AboutTitle>About The Collection</AboutTitle>
              <AboutPara>
                Sommer Shiels is a journalist, beauty industry expert and travel
                blogger. These memories were created in 2019 while on-location
                shooting the documentary, "Origins of Beauty".
              </AboutPara>
            </div>
          </AboutSection>
        </InfoColumn>
        <ImgWarpper>
          <ImgContainer>
            <Img
              src={Img1}
            />
          </ImgContainer>
          <ImgContainer>
            <Img
              src={Img2}
            />
          </ImgContainer>
        </ImgWarpper>
        <ImgWarpper>
          <ImgContainer>
            <Img
              src={Img3}
            />
          </ImgContainer>
        </ImgWarpper>
        <SocialContainer>
          <SocialIcons />
        </SocialContainer>
      </InfoRow>
    </Container>
  );
};

export default SommerSection;
