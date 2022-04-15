import React from "react";
import {
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Questions,
  ImgWarpper,
  Img,
  GradientContainer,
} from "./FaqSection.elements";
import QuestionArrowIcon from "../common/icons/QuestionArrowIcon";

const data = [
  {
    question: "WHAT BLOCKCHAIN ARE MEMORY MINTS MINTED ON?",
  },
  {
    question:
      "WHAT’S THE DIFFERENCE BETWEEN A MEMORY, A DREAM AND AN EXPERIENCE?",
  },
  {
    question: "WHAT IS A MEMORY MINT?",
  },
  {
    question: "WHAT’S AN IMMERSIVE NFT?",
  },
  {
    question: "HOW DO YOU MAKE AN IMMERSIVE NFT?",
  },
];
const FaqSection = () => {
  return (
    <Container>
      <GradientContainer>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>FAQ</Heading>
              {data.map((d) => {
                return (
                  <Questions>
                    {d.question} <QuestionArrowIcon />{" "}
                  </Questions>
                );
              })}
            </TextWrapper>
          </InfoColumn>
          <ImgWarpper>
            <Img />
          </ImgWarpper>
        </InfoRow>
      </GradientContainer>
    </Container>
  );
};

export default FaqSection;
