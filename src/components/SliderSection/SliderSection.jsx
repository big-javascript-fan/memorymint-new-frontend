import React, { useRef, useState } from 'react'
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
import { mint } from '../../utils/interact';
import { ToastContainer, toast } from 'react-toastify';

const SliderSection = ({ title, cards, id }) => {
	const [mintAmount, setMintAmount] = useState(0);
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

	const onUpdateMintAmount = (e) => {
		setMintAmount(e.target.value);
	}

	const handleMint = async () => {
		if (mintAmount > 0) {
			try {
				await mint(id, mintAmount);
				toast("Mint Success!", { type: toast.TYPE.SUCCESS });
			} catch (error) {
				toast(error.reason, { type: toast.TYPE.ERROR });
			}
		} else {
			toast("Mint amount should be over 1!", { style: { color: 'red' } });
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
								<ProductCard item={item} title={title} id={id} />
							</div>
						)
					})
				}
			</ProductCardContainer>
			<div className="mint-container">
				<label className="mint-label">Amount: </label>
				<input className="mint-input" type="number" max="9" onChange={onUpdateMintAmount} value={mintAmount} />
				<div className="mint-btn" onClick={() => handleMint()}>Mint</div>
			</div>
			<ToastContainer />
		</Container>
	);
};

export default SliderSection;
