import styled from "styled-components";
import { devices } from "../constant";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 200px;
  align-items: center;
  background: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  @media ${devices.laptopM} {
    padding: 10px 50px;
  }
  @media ${devices.laptop} {
    padding: 10px 50px;
  }
  @media ${devices.mobileL} {
    padding: 10px 30px;
  }
`;

export const Logo = styled.div`
  font-size: 32px;
  position: relative;
  animation: mymove 1s infinite;
  animation-duration: 3s;  
  animation-delay: 1s;
  @keyframes mymove {
    0% {
      color: #fffff;
      left: 0%;
      top: 0px;
    }
    20% {
      color: #fffff;
      left: 10%;
      top: 0px;
    }

    25% {
      color: #0000;
      left: 0%;
      top: 0px;
    }


  }
  @media ${devices.laptopM} {
    font-size: 28px;
  }
  @media ${devices.laptop} {
    font-size: 22px;
  }
  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;

export const HomeMenu = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.25, 1.25);
  }
`;
