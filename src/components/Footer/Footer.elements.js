import styled from "styled-components";
import { devices } from "../constant";
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 200px;
  align-items: center;
  background: #111111;
  box-shadow: inset 38.1388px -38.1388px 38.1388px rgba(149, 149, 149, 0.01),
    inset -38.1388px 38.1388px 38.1388px rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(25.1716px);
  height: 100px;
  @media ${devices.laptop} {
    padding: 20px 50px;
}

}
`;

export const Logo = styled.div`
  font-size: 32px;
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.25, 1.25);
  }
`;

export const CopyRightSec = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
