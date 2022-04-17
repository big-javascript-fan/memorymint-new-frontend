import styled from "styled-components";
import { devices } from "../constant";

export const Container = styled.div`
background-color:#323232;
max-width: 300px;
max-height: 100%;
padding: 15px;
margin: 10px;
border-radius: 20px;
position: relative;
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

export const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`;

export const Overlay = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
export const ImgContainer = styled.div`
  position: relative;
  &:hover ${OverlayContainer} {
    height: 100%;
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
  margin-top: 30px;
  @media ${devices.laptopM} {
    margin-top: 20px;
  }
  @media ${devices.laptop} {
    margin-top: 10px;
  }
  @media ${devices.mobileL} {
    margin-top: 5px;
  }
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
  margin-bottom: 7px;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  background-color: #f94144;
  border-radius: 8px;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  @media ${devices.laptopM} {
    font-size: 16px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
