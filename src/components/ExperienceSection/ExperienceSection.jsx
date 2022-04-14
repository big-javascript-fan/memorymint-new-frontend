import React from "react";
import { Container, Card, TitleSec, Button } from "./ExperienceSection.elements";
const ExperienceSection = () => {
  return (
    <Container>
      <Card>
          <TitleSec>They're Experiences</TitleSec>
          <Button onClick={() => {
            // TODO: Handle Click
          }}>Launch sample</Button>
          </Card>
    </Container>
  );
};

export default ExperienceSection;
