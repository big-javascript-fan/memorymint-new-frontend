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
      answer: "We don’t claim to know the answer to that, but here are some links to people who do: <br />https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte <br /> https://en.wikipedia.org/wiki/Alfred_Adler <br />https://en.wikipedia.org/wiki/Joseph_Campbell"
  },
  {
    question: "WHAT IS A MEMORY MINT?",
    answer: "A Memory Mint is an experience captured in 360-video that we turn into an Immersive NFT."
  },
  {
    question: "WHAT’S AN IMMERSIVE NFT?",
    answer: "An Immersive NFT a 3D model baked with 360 images that tell a story.  Like any NFT, they can be viewed in any wallet on any mobile device or desktop computer.  Unlike other NFTs, though, Immersive NFTs can also be viewed in a virtual reality headset, allowing you to experience the memory in all 360 degrees."
  },
  {
    question: "HOW DO YOU MAKE AN IMMERSIVE NFT?",
    answer: "Creating an Immersive NFT is a multi-step process that involves 360-imaging hardware and stitching software, HDR image processing and 3D modeling.  The decentralized method of creating Memory Mint Immersive NFTs ensures that each NFT is a unique work of art."
  },
  {
    question: "WHAT HAPPENS TO THE SOURCE FILES AFTER AN NFT IS MINTED?",
    answer: "Whenever possible, original source files are deleted and images archived after minting.  In some instances, presets and modeling data are preserved for future creation."
  },
  {
    question: "WHEN WILL THE PERSONALIZED MEMORY VAULTS LAUNCH?",
    answer: "The first generation of personalized Memory Mints will launch within sixth months of the close of our first sale, “The Sommer Shiels Collection”."
  },
  {
    question: "HOW IS MY MEMORY MINT VAULT A TICKET TO THE METAVERSE?",
    answer: "Your Memory Mint Vault will be a three-dimensional WebXR environment that can be accessed via any web browser.  But, for a truly immersive experience, you can also access your mint from a virtual reality headset.  Once inside, you can move around your space via an avatar, as well as invite friends and guests inside your Vault to experience your NFT collection. <br />The Metaverse is many different things to many different people.  Much like the World Wide Web is a networked collection of websites, we see the Metaverse as any networked collection of three-dimensional, virtual environments.  In that sense, your Memory Mint Vault can function as the perfect home base for your Metaverse exploration."
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
                      <div dangerouslySetInnerHTML={{ __html: d.answer }} />
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
