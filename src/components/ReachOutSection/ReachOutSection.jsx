import React from "react";
import {
  Container,
  TextWrapper,
  Heading,
  Input,
  InputsContainer,
  TextArea,
} from "./ReachOutSection.elements";
const ReachOutSection = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading>FAQ</Heading>
        <InputsContainer>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </InputsContainer>
        <TextArea placeholder="Message" />
      </TextWrapper>
    </Container>
  );
};

export default ReachOutSection;
