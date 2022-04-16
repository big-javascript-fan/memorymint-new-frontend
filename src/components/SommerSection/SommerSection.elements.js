import styled from "styled-components";
import bg1 from "../../assets/img/Bgimage1.png";
import { devices } from "../constant";
export const Container = styled.div`
  padding:0px 180px 0px 200px;
  background-image: url(${bg1});
  height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  @media ${devices.laptopM} {
    padding:50px;
  }
}
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopTitle = styled.div`
  background: rgba(255, 255, 255, 0.107);
  backdrop-filter: blur(16.5107px);
  border-radius: 40px;
  padding: 12px 30px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding: 70px 0px 99px 0px;
  @media ${devices.laptopM} {
    padding: 5px 0px 20px 0px;
  }
`;

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 122px;
  color: #ffffff;
  @media ${devices.laptopM} {
    font-size: 100px;
  }
  @media ${devices.laptop} {
    font-size: 50px;
  }
  @media ${devices.mobileL} {
    font-size: 33px;
  }
`;
export const Subtitle = styled.div`
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  @media ${devices.laptopM} {
    font-size: 33px;
  }
  @media ${devices.laptop} {
    font-size: 28px;
  }
  @media ${devices.mobileL} {
    font-size: 23px;
  }
`;
export const AboutSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`;
export const AboutTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 50px;

  @media ${devices.laptopM} {
    font-size: 33px;
  }
  @media ${devices.laptop} {
    font-size: 28px;
  }
  @media ${devices.mobileL} {
    font-size: 23px;
  }
`;
export const AboutPara = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 35px;
  @media ${devices.laptopM} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 16px;
  }
  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const ImgWarpper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
`;
export const ImgContainer = styled.div`
  img {
    width: 100%;
    transition: 0.5s all ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
export const Img = styled.img`
  margin: 10px;
  @media ${devices.laptopM} {
    width: 150px !important;
    height: 250px !important;
  }
`;
export const Scroll = styled.div`
  align-self: flex-start;
  margin-top: 170px;
  cursor: pointer;
  padding-right: 200px;
  @media ${devices.laptopM} {
    margin-top: 50px;
    padding-right: 50px;
  }
`;
export const SocialContainer = styled.div`
  position: absolute;
  right: 5%;
  transform: translate(-50%, -50%);
  @media ${devices.laptopM} {
    right: 0px;
  }
`;