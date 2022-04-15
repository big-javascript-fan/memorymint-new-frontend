import styled from "styled-components";
import { devices } from "../constant";
import img from '../../assets/img/Bgimage3.png';

export const Container = styled.div`

  height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${img});
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

export const GradientContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:0px 180px 0px 200px;
height: 100%;
background:radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.73) 0%, #000000 100%);
@media ${devices.laptopM} {
  height: 800px;
}
@media ${devices.laptop} {
  height: 700px;
}
@media ${devices.mobileL} {
  height: 500px;  
}
`

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
  margin-top: 30px;
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
export const Button = styled.button`
  font-family: "Avenir Next LT Pro";
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  background-color: #f94144;
  border-radius: 8px;
  border: none;
  padding: 20px 30px;
  margin-top: 100px;
`;

export const ImgWarpper = styled.div`
  display: flex;
  position: relative;
`;
export const Img = styled.img`
  height: 581px;
  width: 705px;
  padding-bottom:50px;

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
export const ListContainer = styled.ul`
  margin-top: 80px;
`;

export const List = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 20px;
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
