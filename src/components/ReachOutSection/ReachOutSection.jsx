import React from "react";
import {
  Container,
  TextWrapper,
  Heading,
  Input,
  InputsContainer,
  TextArea,
  GradientContainer,
  InputSubContainer,
} from "./ReachOutSection.elements";
const ReachOutSection = () => {
  return (
    <Container>
      <GradientContainer>
        <TextWrapper>
          <Heading>Reach Out</Heading>
          <InputsContainer>
            <InputSubContainer>
              <Input placeholder="Name" />
            </InputSubContainer>
            <InputSubContainer>
              <Input placeholder="Email" />
            </InputSubContainer>
          </InputsContainer>
          <InputSubContainer>
            <TextArea placeholder="Message" />
          </InputSubContainer>
        </TextWrapper>
      </GradientContainer>
    </Container>
  );
};

export default ReachOutSection;
