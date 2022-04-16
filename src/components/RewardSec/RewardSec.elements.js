import styled from "styled-components";
import { devices } from "../constant";

export const Container = styled.div`
height: 900px;
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
padding:0px 180px 0px 200px;

}
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoColumn = styled.div`
  margin-bottom: 90px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  font-weight: 700;
  @media ${devices.laptopM} {
    margin-bottom: 5px;
    font-size: 32px;
  }
  @media ${devices.laptop} {
    font-size: 22px;
  }
  @media ${devices.mobileL} {
    font-size: 18px;
  }
`;
export const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const ImgWarpper = styled.div`
  display: flex;
  img {
    width: 100%;
    transition: 0.5s all ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  max-height: 500px;
  @media ${devices.laptopM} {
    width: 300px !important;
    height: 300px !important;
  }
  @media ${devices.laptop} {
    width: 200px !important;
    height: 200px !important;
  }
  @media ${devices.mobileL} {
    width: 100px !important;
    height: 100px !important;
  }
`;
