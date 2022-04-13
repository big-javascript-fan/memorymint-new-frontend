import styled from "styled-components";
import bg1 from "../../assets/img/Bgimage1.png";

export const Container = styled.div`
margin-right:auto;
margin-left:auto;
padding:0px 200px 0px 200px;
background-image: url(${bg1});
height:500px
}
`;

export const InfoRow = styled.div`
  display: flex;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 80px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  font-weight: 700;
`;
export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
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
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  max-height: 500px;
`;
