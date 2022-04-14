import styled from "styled-components";
import { devices } from "../constant";
export const Container = styled.div`
display: flex;
align-items: center;
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
export const Input = styled.input`
background: transparent;
border-bottom: 1px solid gray;
outline: none;
width:745px;
height:31px;
color:#fffff;
margin:50px 30px 50px 0px;

`
export const TextArea = styled.textarea`
background: transparent;
border-bottom: 1px solid gray;
outline: none;
width:100%;
height:31px;
color:#fffff;

`