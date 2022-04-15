import React from "react";
import {
  Container,
  Heading,
  GradientContainer,
  ImgWarpper,
  Img,
  TextWrapper,
  Title,
  ListContainer,
  List,
} from "./RoadMapSec.elements";
import img from "../../assets/img/roadmap.png";

const RoadMapSec = () => {
  return (
    <Container>
      <GradientContainer>
        <Heading>Road Map</Heading>
        <ImgWarpper>
          <Img src={img} />
        </ImgWarpper>
        <TextWrapper>
          <Title>1. PRESENT MOMENT</Title>
          <ListContainer>
            <List>Welcome! Bask in present-moment awareness!</List>
            <List>Pre-Sale of our first collection begins on February 27, 2022, exclusively from our website.</List>
            <List>Pre-Sale of our first collection begins on February 27, 2022, exclusively from our website.</List>
          </ListContainer>
        </TextWrapper>
      </GradientContainer>
    </Container>
  );
};

export default RoadMapSec;
