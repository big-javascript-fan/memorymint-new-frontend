import styled from "styled-components";
import { devices } from "../constant";

export const Container = styled.div`
background-color:#323232;
max-width: 300px;
max-height: 100%;
padding: 15px;
margin: 10px;
border-radius: 20px;
  @media ${devices.laptopM} {
    max-width: 100%;
    height: auto;
  }
  @media ${devices.laptop} {
    max-width: 100%;
    height: auto;

  }
  @media ${devices.mobileL} {
    max-width: 100%;
    height: auto;
    
  }
}
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
export const TitleIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid gray; ;
`;
export const Title = styled.h3`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:30px;

`;
export const SaleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  margin-bottom:7px;

`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
