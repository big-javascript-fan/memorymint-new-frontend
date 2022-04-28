import React from "react";
import SliderSection from "../components/SliderSection";
import SommerSection from "../components/SommerSection";
import SeriesSec from "../components/SeriesSec";
import RewardSec from "../components/RewardSec";
import RoadMapSec from "../components/RoadMapSec";

const cardData = {
	title: 'MARCH 11, 2022',
	subtitles: [
		"SERIES B, featuring memories from Sommer's visit to Machu Picchu drops MARCH 11, 2022.",
	]
}

const cardInfos = [
	{
		id: 1,
		title: 'Playing With My Hair',
		cards: [1, 2, 3, 4, 5, 6]
	},
	{
		id: 2,
		title: 'Monkey Kiss',
		cards: [1, 2, 3, 4, 5, 6]
	},
	{
		id: 3,
		title: 'Those Eyes',
		cards: [1, 2, 3, 4, 5, 6]
	}
]

const ProductsListPage = () => {
	return (
		<>
			<SommerSection />
			<SeriesSec />
			{
				cardInfos.map((item, index) => {
					return (
						<SliderSection key={index} title={item.title} cards={cardInfos} />
					)
				})
			}
			<RewardSec />
		</>
	);
};

export default ProductsListPage;
