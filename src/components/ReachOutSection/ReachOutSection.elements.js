import styled from "styled-components";
import { devices } from "../constant";
import img from '../../assets/img/Bgimage4.png';

export const Container = styled.div`
  height: 1080px;
  background-image: url(${img});
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
export const TextWrapper = styled.div``;

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  padding-bottom: 100px;
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

export const InputsContainer = styled.div`
display:flex;
`
export const InputSubContainer = styled.div`
border-bottom: 1px solid gray;
margin:20px;
`
export const Input = styled.input`
background: transparent;
border: 0px solid;
outline: none;
width:745px;
height:31px;
color:#fffff;
padding-bottom:10px;

`
export const TextArea = styled.textarea`
background: transparent;
border: 0px solid;
outline: none;
width:100%;
height:31px;
color:#fffff;

`