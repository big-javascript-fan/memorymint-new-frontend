import styled from "styled-components";
import { devices } from "../constant";

export const Container = styled.div`
display: flex;
padding:0px 180px 0px 200px;
height: 800px;
background-color:#010101;
flex-direction: column;
justify-content: center;
  @media ${devices.laptopM} {
    height: 800px;
  }
  @media ${devices.laptop} {
    height: 700px;
  }
  @media ${devices.mobileL} {
    height: 500px;
  }
}
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:60px;
`;
export const Heading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  color: #ffffff;
  @media ${devices.laptopM} {
    font-size: 32px;
  }
  @media ${devices.laptop} {
    font-size: 22px;
  }
  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const SliderActionContainer = styled.div`
  display: flex;
`;
export const ProductCardContainer = styled.div`
display: flex;
overflow-x: scroll;
`