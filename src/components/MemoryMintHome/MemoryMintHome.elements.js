import styled from "styled-components";
import bg1 from "../../assets/img/Bgimage1.png";
import { devices } from "../constant";
export const Container = styled.div`
  margin-right:auto;
  margin-left:auto;
  padding:0px 180px 0px 200px;
  background-image: url(${bg1});
  height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${devices.laptopM} {
    height: 800px;
  }
  @media ${devices.laptop} {
    height: 700px;
    padding:0px 50px 0px 50px;
  }
  @media ${devices.mobileL} {
    padding:0px 10px 0px 10px;
    height: 500px;
  }
}
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div``;

export const Heading = styled.div`
  font-family: "Avenir Next LT Pro";
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
  font-family: "Avenir Next LT Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  /* identical to box height */
  color: #ffffff;
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
export const Button = styled.button`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  background-color: #f94144;
  border-radius: 8px;
  border: none;
  padding: 20px 30px;
  margin-top: 100px;
  @media ${devices.laptopM} {
    margin-top: 50px;
    font-size: 18px;
  }
  @media ${devices.laptop} {
    margin-top: 30px;
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    margin-top: 20px;
    font-size: 12px;
  }
`;

export const ImgWarpper = styled.div`
  display: flex;
  position: relative;
`;
export const Img = styled.img`
  width: 717px;
  height: 1077px;
  @media ${devices.laptopM} {
    width: 500px;
    height: 800px;
  }
  @media ${devices.laptop} {
    width: 450px;
    height: 700px;
  }
  @media ${devices.mobileL} {
    width: 350px;
    height: 500px;
  }
`;
export const Scroll = styled.div`
  align-self: flex-start;
  margin-top: 100px;
`;
export const SocialContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-50%, -50%);
`;
