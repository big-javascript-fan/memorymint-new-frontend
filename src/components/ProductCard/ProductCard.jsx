import React, { useState } from "react";
import {
	Container,
	Img,
	TitleIconContainer,
	Title,
	PriceDetailContainer,
	Tag,
	PriceContainer,
	SaleContainer,
	Overlay,
	OverlayContainer,
	ImgContainer,
	Button,
} from "./ProductCard.elements";
import ProductImg from "../../assets/img/product-img.png";
import LoveIcon from "../../components/common/icons/LoveIcon";
import EthIcon from "../../components/common/icons/EthIcon";
import { mint } from "../../utils/interact";

const ProductCard = ({ item, title }) => {

	console.log('item info =====', item)
	const [kind, setKind] = useState(1)
	const [mintAmount, setMintAmount] = useState(0)

	const handleClick = async () => {
		const mintSuccess = await mint(kind, mintAmount);

		console.log('mint result ------', mintSuccess)
	}

	const cardDatas = [
		{
			id: 1,
			btnName: 'Mint',
			title: 'Playing With My Hair...',
			tag: 'Pre-Sale',
			preBalance: 0.7,
			preRating: 'ETH/66',
			saleBalance: 0.8,
			saleRating: 'ETH/266'
		},
		{
			id: 2,
			btnName: 'Mint',
			title: 'Playing With My Hair...',
			tag: 'Pre-Sale',
			preBalance: 0.7,
			preRating: 'ETH/66',
			saleBalance: 0.8,
			saleRating: 'ETH/266'
		}
	]

	return (
		<Container>
			<ImgContainer>
				<Img src={ProductImg} />
				<OverlayContainer>
					<Overlay>
						<Button onClick={handleClick}>Mint</Button>
					</Overlay>
				</OverlayContainer>
			</ImgContainer>
			<TitleIconContainer>
				<Title>Playing With My Hair..</Title>
				<LoveIcon />
			</TitleIconContainer>
			<PriceDetailContainer>
				<SaleContainer
					style={{ borderRight: "1px solid gray", paddingRight: "20px" }}
				>
					<Tag>Pre-Sale</Tag>
					<PriceContainer>
						<EthIcon style={{ padding: "7px" }} />
						<span style={{ fontSize: "22px", padding: "7px" }}>0.7</span>
						<span style={{ fontSize: "16px" }}>ETH/66</span>
					</PriceContainer>
				</SaleContainer>

				<SaleContainer style={{ paddingLeft: "20px" }}>
					<Tag>General-Sale</Tag>
					<PriceContainer>
						<EthIcon style={{ padding: "7px" }} />
						<span style={{ fontSize: "22px", padding: "7px" }}>0.8</span>
						<span style={{ fontSize: "16px" }}>ETH/266</span>
					</PriceContainer>
				</SaleContainer>
			</PriceDetailContainer>
		</Container>
	);
};

export default ProductCard;
