import React from "react";
import {
  Container,
  IconSec,
  TitleSec,
  DescriptionSec,
  Card,
  GradientContainer
} from "./CardsSection.elements";
import CollectibilityIcon from '../common/icons/CollectivityIcon';
import UtilityIcon from '../common/icons/UtilityIcon';
import RarityIcon from '../common/icons/RarityIcon';
const CardsSection = () => {
  const data = [
    {
      title: "Collectibility",
      description:
        "NFTs are organized into COLLECTIONS and SERIES. Collect an entire series and unlock additional benefits. Complete an entire collection and unlock even more!",
    },
    {
      title: "Rarity",
      description:
        "Memories are one of the rarest commodities on Earth. We limit the number of NFTs minted to honor the scarcity and uniqueness of each memory.",
    },
    {
      title: "Utility",
      description:
        "Every Memory Mint NFT grants its holder access to their very own, customizable Memory Mint Vault in the Meta-verse. Use it to store and showcase your NFTs and invite guests inside to view—and experience—your collection.",
    },
  ];
  return (
    <Container id="card_section">
      <GradientContainer>
        {data.map((d) => {
          return (
            <Card>
              {d.title === "Utility" && <UtilityIcon/>}
              {d.title === "Rarity" && <RarityIcon/>}
              {d.title === "Collectibility" && <CollectibilityIcon/>}
              <TitleSec>{d.title}</TitleSec>
              <DescriptionSec>{d.description}</DescriptionSec>
            </Card>
          );
        })}
      </GradientContainer>
    </Container>
  );
};

export default CardsSection;
