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
const SliderSection = () => {
  const Data = ["Playing With My Hair", "Monkey Kiss", "Those Eyes"];
  return (
    <>
      {Data.map((d) => {
        return (
          <Container>
            <HeaderContainer>
              <Heading>{d}</Heading>
              <SliderActionContainer>
                <LeftArrow />
                <RightArrow />
              </SliderActionContainer>
            </HeaderContainer>
            <ProductCardContainer>
              <ProductCard />
            </ProductCardContainer>
          </Container>
        );
      })}
    </>
  );
};

export default SliderSection;
