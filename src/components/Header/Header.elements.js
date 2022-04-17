import styled from "styled-components";
import { devices } from "../constant";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 200px;
  align-items: center;
  background: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(5px);
  height: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  @media ${devices.laptopM} {
    padding: 50px;
  }
  @media ${devices.laptop} {
    padding: 20px;
  }
  @media ${devices.mobileL} {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  font-size: 32px;
  position: relative;
  animation: mymove 1s infinite;
  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 100px;
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
  :hover {
    transform: scale(1.25, 1.25);
  }
`;
