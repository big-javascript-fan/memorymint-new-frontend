import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage2.png";

export const Container = styled.div`
  height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${img});
  margin: 100px 0px;
  @media ${devices.laptopM} {
    height: 800px;
  }
  @media ${devices.laptop} {
    height: 600px;
  }
  @media ${devices.mobileL} {
    height: 500px;
  }

}
`;

// @media ${devices.laptop} {
//   height: 700px;
// }
// @media ${devices.mobileL} {
//   height: 500px;
// }
// }

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 180px 20px 200px;
  height: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  @media ${devices.laptopM} {
    padding: 20px 50px 20px 50px;
    height: 800px;
  }
  @media ${devices.laptop} {
    height: 600px;
    padding: 20px 20px 20px 20px;
  }
  @media ${devices.mobileL} {
    height: 500px;
  }
`;
// @media ${devices.laptop} {
//   height: 700px;
// }
// @media ${devices.mobileL} {
//   height: 500px;
// }
// }

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${devices.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div``;

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  color: #ffffff;
  @media ${devices.laptopM} {
    font-size: 32px;
  }
  @media ${devices.laptop} {
    font-size: 24px;
  }
  @media ${devices.mobileL} {
    font-size: 18px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  /* identical to box height */
  @media ${devices.laptopM} {
    font-size: 22px;
  }
  @media ${devices.laptop} {
    font-size: 18px;
  }
  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;
export const Paragraph = styled.div`
  margin-top: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  /* identical to box height */
  @media ${devices.laptopM} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;


export const ImgWarpper = styled.div`
  display: flex;
  position: relative;
`;
export const Img = styled.img`
  width: 645px;
  object-fit: contain;
  @media ${devices.laptopL} {
    width: 500px;
   
  }
  @media ${devices.laptopM} {
    width: 350px;
   
  }
  @media ${devices.laptop} {
    width: 250px;
    
  }
  @media ${devices.mobileL} {
    width: 150px;
  }
`;


