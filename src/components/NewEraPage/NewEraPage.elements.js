import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage2.png";

export const Container = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
margin: 100px 0px;
@media ${devices.laptopM} {
}
@media ${devices.laptop} {
}
@media ${devices.mobileL} {;
}
}
}
`;

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 180px 0px 200px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  @media ${devices.laptopM} {
    padding:0px 50px 0px 50px;
  }
  @media ${devices.laptop} {
    padding:0px 50px 0px 50px;
  }
  @media ${devices.mobileL} {
    padding:0px 10px 0px 10px;
  }
}
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InfoColumn = styled.div`
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
  font-family: "Avenir Next LT Pro";
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
  font-family: "Avenir Next LT Pro";
  font-size: 14px;
  font-weight: 500;
  @media ${devices.laptop} {
    font-size: 12px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;

export const ImgWarpper = styled.div`
  display: flex;
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  @media ${devices.laptopM} {
    width: 300px !important;
  }
  @media ${devices.laptop} {
    width: 200px !important;
  }
  @media ${devices.mobileL} {
    width: 100px !important;
  }
`;
