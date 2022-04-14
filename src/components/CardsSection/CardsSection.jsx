import React from "react";
import {
  Container,
  IconSec,
  TitleSec,
  DescriptionSec,
  Card,
} from "./CardsSection.elements";

const CardsSection = () => {
  const data = [
    {
      icon: "ICON",
      title: "COLLECTIBILITY",
      description:
        "NFTs are organized into COLLECTIONS and SERIES. Collect an entire series and unlock additional benefits. Complete an entire collection and unlock even more!",
    },
    {
      icon: "ICON",
      title: "Rarity",
      description:
        "Memories are one of the rarest commodities on Earth. We limit the number of NFTs minted to honor the scarcity and uniqueness of each memory.",
    },
    {
      icon: "ICON",
      title: "Utility",
      description:
        "Every Memory Mint NFT grants its holder access to their very own, customizable Memory Mint Vault in the Meta-verse. Use it to store and showcase your NFTs and invite guests inside to view—and experience—your collection.",
    },
  ];
  return (
    <Container>
      {data.map((d) => {
        return (
          <Card>
            <IconSec>{d.icon}</IconSec>
            <TitleSec>{d.title}</TitleSec>
            <DescriptionSec>{d.description}</DescriptionSec>
          </Card>
        );
      })}
    </Container>
  );
};

export default CardsSection;
