import React, {useState} from "react";
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
  QAContainer,
  Answer,
  IconContainer,
  QuestionContainer
} from "./FaqSection.elements";
import questionImg from '../../assets/img/question.png'
import QuestionArrowOpenIcon from "../common/icons/QuestionArrowOpenIcon";
import QuestionArrowCloseIcon from "../common/icons/QuestionArrowCloseIcon";

const data = [
  {
    question: "WHAT BLOCKCHAIN ARE MEMORY MINTS MINTED ON?",
    answer: "Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet."
  },
  {
    question:
      "WHAT’S THE DIFFERENCE BETWEEN A MEMORY, A DREAM AND AN EXPERIENCE?",
      answer: "Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet."
  },
  {
    question: "WHAT IS A MEMORY MINT?",
    answer: "Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet."
  },
  {
    question: "WHAT’S AN IMMERSIVE NFT?",
    answer: "Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet."
  },
  {
    question: "HOW DO YOU MAKE AN IMMERSIVE NFT?",
    answer: "Memory Mints are ERC-721 Tokens minted on the Etherium Mainnet."
  },
];
const FaqSection = () => {
  const [selectedQestion, setSelectedQuestion] = useState(-1);
  return (
    <Container>
      <GradientContainer>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>FAQ</Heading>
              {data.map((d, index) => {
                return (
                  <QAContainer>
                    <QuestionContainer onClick={()=> {
                      if(selectedQestion === index) {
                        setSelectedQuestion(-1)
                      } else
                          setSelectedQuestion(index)}
                      }>
                      <Questions>
                        {d.question}
                      </Questions> 
                      <IconContainer>
                        {selectedQestion === index ? <QuestionArrowCloseIcon/> : <QuestionArrowOpenIcon/>}
                      </IconContainer>
                    </QuestionContainer>
                    <Answer display = {selectedQestion === index}>
                      {d.answer}
                    </Answer>
                  </QAContainer>
                );
              })}
            </TextWrapper>
          </InfoColumn>
          <ImgWarpper>
            <Img src={questionImg}/>
          </ImgWarpper>
        </InfoRow>
      </GradientContainer>
    </Container>
  );
};

export default FaqSection;
