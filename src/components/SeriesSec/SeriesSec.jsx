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
  GradientContainer,
} from "./SeriesSec.elements";
import leftSideImg from "../../assets/img/girl-img.png";
const SeriesSec = () => {
  return (
    <Container>
      <GradientContainer>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>Series A:</Heading>
              <Subtitle>Limit 1098</Subtitle>
              <Paragraph>
                "On January 23, 2019, I set sail from Iquitos, Peru for the headwaters
                of the upper Ucayali River to meet with a Shipibo-Conibo ayahuasca medicine
                worker. Once there, I made friends with this precious monkey! This little
                guy clung to me like I was its mother, while it played with my hair and
                made kissing sounds at me. Looking into those deep brown eyes immediately
                takes me back to that most amazing time in my life. I was at this village
                for a little over six hours on this trip, so I’m limiting each of these to
                only 366 immersive NFTs, one for every minute I spent with my monkey friend."
              </Paragraph>
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

export default SeriesSec;
