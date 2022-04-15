import React from "react";
import {
  Container,
  Img,
  TitleIconContainer,
  Title,
  PriceDetailContainer,
  Tag,
  PriceContainer,
  SaleContainer,
} from "./ProductCard.elements";
import ProductImg from "../../assets/img/product-img.png";
import LoveIcon from "../../components/common/icons/LoveIcon";
import EthIcon from "../../components/common/icons/EthIcon";
const ProductCard = () => {
  const data = [1, 2,3,4,5,6];
  return (
    <>
      {data.map((d) => {
        return (
          <Container>
            <Img src={ProductImg} />
            <TitleIconContainer>
              <Title>Playing With My Hair..</Title>
              <LoveIcon />
            </TitleIconContainer>
            <PriceDetailContainer>
              <SaleContainer>
                <Tag>Pre-Sale</Tag>
                <PriceContainer>
                  <EthIcon style={{ padding: "7px" }} />
                  <span style={{ fontSize: "22px", padding: "7px" }}>0.7</span>
                  <span style={{ fontSize: "16px" }}>ETH/66</span>
                </PriceContainer>
              </SaleContainer>

              <SaleContainer>
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
      })}
    </>
  );
};

export default ProductCard;
