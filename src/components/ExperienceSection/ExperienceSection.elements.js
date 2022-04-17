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

// @media ${devices.laptop} {
//   height: 700px;
//   padding:0px 50px 0px 50px;
// }
// @media ${devices.mobileL} {
//   padding:0px 10px 0px 10px;
//   height: 500px;  
// }

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
  @media ${devices.laptopM} {
    height: 300px;
    width: 1217px;
  }
  @media ${devices.laptop} {
    height: 250px;
    width: 817px;
  }
  @media ${devices.mobileL} {
    height: 180px;
    width: 517px;
  }
}
`;

export const TitleSec = styled.h1`
  font-size: 12px;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;

  @media ${devices.laptopM} {
    font-size: 35px;

  }
  @media ${devices.laptop} {
    font-size: 22px;

  }
  @media ${devices.mobileL} {
    font-size: 18px;

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
  cursor: pointer;
  :hover {
    transform:scale(1.1, 1.1);
  }

  @media ${devices.laptopM} {
    font-size: 18px;

  }
  @media ${devices.laptop} {
    font-size: 14px;
    padding: 15px 20px;

  }
  @media ${devices.mobileL} {
    font-size: 12px;
    padding: 10px 15px;


  }
  
`;
