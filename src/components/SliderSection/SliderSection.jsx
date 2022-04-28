import React, { useRef } from 'react'
import {
	Container,
	Heading,
	SliderActionContainer,
	HeaderContainer,
	ProductCardContainer,
} from "./SliderSection.elements";
import ProductCard from "../ProductCard";
import LeftArrow from "../common/icons/LeftArrow";
import RightArrow from "../common/icons/RightArrow";

const SliderSection = ({ title, cards }) => {
	const refBox = useRef();
	const refContainer = useRef();
	let scrollAmount = 0;
	const slideTo = (direction) => {
		if (direction === 'left') {
			refContainer.current.scrollTo({
				top: 0,
				left: (scrollAmount -= refBox.current.clientWidth),
				behavior: "smooth"
			})
			if (scrollAmount < 0) {
				scrollAmount = 0
			}
		}
		if (direction === 'right') {
			refContainer.current.scrollTo({
				top: 0,
				left: (scrollAmount += refBox.current.clientWidth),
				behavior: "smooth"
			})

		}
	}

	return (
		<Container>
			<HeaderContainer>
				<Heading>{title}</Heading>
				<SliderActionContainer>
					<LeftArrow onClick={() => {
						slideTo('left');
					}} />
					<RightArrow onClick={() => {
						slideTo('right');
					}} />
				</SliderActionContainer>
			</HeaderContainer>
			<ProductCardContainer ref={refContainer}>
				{
					cards.map((item, index) => {
						return (
							<div key={index} ref={refBox}>
								{item.cards.map((data, index) => {
									return (
										<ProductCard item={item} title={title} />
									)
								})}
							</div>
						)
					})
				}
			</ProductCardContainer>
		</Container>
	);
};

export default SliderSection;
