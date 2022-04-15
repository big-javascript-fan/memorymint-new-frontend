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
  Button
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
          <Button>Submit</Button>
        </TextWrapper>
      </GradientContainer>
    </Container>
  );
};

export default ReachOutSection;
