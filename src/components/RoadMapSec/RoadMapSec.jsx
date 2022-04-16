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

const RoadMapSec = ({title, cardData}) => {
  return (
    <Container>
      <GradientContainer>
        <Heading>{title}</Heading>
        <ImgWarpper>
          <Img src={img} />
        </ImgWarpper>
        <TextWrapper>
          <Title>{cardData.title}</Title>
          <ListContainer>
            {
              cardData.subtitles.map((text) => {
                return <List>{text}</List>
              })
            }
          </ListContainer>
        </TextWrapper>
      </GradientContainer>
    </Container>
  );
};

export default RoadMapSec;
