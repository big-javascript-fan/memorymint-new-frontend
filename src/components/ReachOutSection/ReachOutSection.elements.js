import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage4.png";

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0px;
}
`;

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 180px 0px 200px;
  height: 1080px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  @media ${devices.laptopM} {
    height: 800px;
    padding: 0px 50px 0px 50px;
  }
  @media ${devices.laptop} {
    height: 700px;
    padding: 0px 50px 0px 50px;
  }
  @media ${devices.mobileL} {
    height: 500px;
    padding: 0px 10px 0px 10px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  padding-bottom: 100px;
  @media ${devices.laptopM} {
    font-size: 32px;
    padding-bottom: 50px;

    @media ${devices.laptop} {
      font-size: 22px;
      padding-bottom: 30px;
    }
    @media ${devices.mobileL} {
      font-size: 16px;
      padding-bottom: 10px;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  @media ${devices.laptopM} {
    flex-wrap: wrap;
  }
`;
export const InputSubContainer = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  margin: 20px 10px;
`;
export const Input = styled.input`
  background: transparent;
  border: 0px solid;
  outline: none;
  height: 31px;
  color: #fffff;
  padding-bottom: 10px;
  width: 100%;
  @media ${devices.laptopM} {

    @media ${devices.laptop} {
    }
    @media ${devices.mobileL} {
    }
  }
`;
export const TextArea = styled.textarea`
  background: transparent;
  border: 0px solid;
  outline: none;
  width: 100%;
  height: 31px;
  color: #fffff;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  background-color: #f94144;
  border-radius: 8px;
  border: none;
  padding: 12px 60px;
  float: right;
  
`;
