import React from "react";
import SliderSection from "../components/SliderSection";
import SommerSection from "../components/SommerSection";
import SeriesSec from "../components/SeriesSec";
import RewardSec from "../components/RewardSec";
import RoadMapSec from "../components/RoadMapSec";
import PlayImg1 from "../assets/img/gallery/HAIRPLAY1.png";
import PlayImg2 from "../assets/img/gallery/HAIRPLAY2.png";
import PlayImg3 from "../assets/img/gallery/HAIRPLAY3.png";
import PlayImg4 from "../assets/img/gallery/HAIRPLAY4.png";
import PlayImg5 from "../assets/img/gallery/HAIRPLAY5.png";
import Kiss1 from "../assets/img/gallery/MONKEYKISS1.png";
import Kiss2 from "../assets/img/gallery/MONKEYKISS2.png";
import Kiss3 from "../assets/img/gallery/MONKEYKISS3.png";
import Kiss4 from "../assets/img/gallery/MONKEYKISS4.png";
import Kiss5 from "../assets/img/gallery/MONKEYKISS5.png";
import Eye1 from "../assets/img/gallery/THOSEEYES1.png";
import Eye2 from "../assets/img/gallery/THOSEEYES2.png";
import Eye3 from "../assets/img/gallery/THOSEEYES3.png";
import Eye4 from "../assets/img/gallery/THOSEEYES4.png";
import Eye5 from "../assets/img/gallery/THOSEEYES5.png";

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
		cards: [{
			img: PlayImg1,
			type: 'image'
		},{
			img: PlayImg2,
			type: 'image'
		},{
			img: PlayImg3,
			type: 'image'
		},{
			img: PlayImg4,
			type: 'image'
		},{
			img: PlayImg5,
			type: 'image'
		},{
			img: '',
			type: '3d'
		}]
	},
	{
		id: 2,
		title: 'Monkey Kiss',
		cards: [{
			img: Kiss1,
			type: 'image'
		},{
			img: Kiss2,
			type: 'image'
		},{
			img: Kiss3,
			type: 'image'
		},{
			img: Kiss4,
			type: 'image'
		},{
			img: Kiss5,
			type: 'image'
		},{
			img: '',
			type: '3d'
		}]
	},
	{
		id: 3,
		title: 'Those Eyes',
		cards: [{
			img: Eye1,
			type: 'image'
		},{
			img: Eye2,
			type: 'image'
		},{
			img: Eye3,
			type: 'image'
		},{
			img: Eye4,
			type: 'image'
		},{
			img: Eye5,
			type: 'image'
		},{
			img: '',
			type: '3d'
		}]
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
						<SliderSection key={index} id={item.id} title={item.title} cards={item.cards} />
					)
				})
			}
			<RewardSec />
		</>
	);
};

export default ProductsListPage;
