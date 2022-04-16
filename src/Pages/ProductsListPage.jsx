import React from "react";
import SliderSection from "../components/SliderSection";
import SommerSection from "../components/SommerSection";
import SeriesSec from "../components/SeriesSec";
import RewardSec from "../components/RewardSec";
import RoadMapSec from "../components/RoadMapSec";
const cardData ={
  title: 'MARCH 11, 2022',
  subtitles: [
    "SERIES B, featuring memories from Sommer's visit to Machu Picchu drops MARCH 11, 2022.",
  ]
}
const ProductsListPage = () => {
  return (
    <>
      <SommerSection />
      <SeriesSec />
      <SliderSection title="Playing With My Hair" cards={[1,2,3,4,5,6]} />
      <SliderSection title="Monkey Kiss" cards={[1,2,3,4,5,6]} />
      <SliderSection title="Those Eyes" cards={[1,2,3,4,5,6]} />
      <RoadMapSec title="Roadmap for Future release" cardData={cardData}/>
      <RewardSec />
    </>
  );
};

export default ProductsListPage;
