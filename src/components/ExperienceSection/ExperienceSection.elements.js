import styled from "styled-components";
import { devices } from "../constant";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0px 180px 0px 200px;
  height: 1080px;
  background-color: #010101;
  
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

export const Card = styled.div`
height: 320px;
width: 1517px;
border-radius: 30px;
display: flex;
background: rgba(255, 255, 255, 0.025);
box-shadow: inset 67.0077px -67.0077px 67.0077px rgba(194, 194, 194, 0.025), inset -67.0077px 67.0077px 67.0077px rgba(255, 255, 255, 0.025);
backdrop-filter: blur(203.703px);
flex-direction: column;
align-items: center;
justify-content: center;
}
`;

export const TitleSec = styled.h1`
  font-size: 12px;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;
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
`;
