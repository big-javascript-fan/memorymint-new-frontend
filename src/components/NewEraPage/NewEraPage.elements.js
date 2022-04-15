import styled from 'styled-components'
import { devices } from "../constant";
import img from '../../assets/img/Bgimage2.png';

export const Container = styled.div `

height: 1080px;

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
}
`;
export const GradientContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:0px 10px 0px 10px;
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
display:flex;
align-items: center;
justify-content: flex-start;
`;

export const InfoColumn= styled.div`
 margin-bottom:90px;
 padding-right:15px;
 padding-left:15px;
 flex:1;
 max-width:50%;
 flex-basis:50%;
 `;

export const TextWrapper = styled.div`
    max-width:540px;
`;

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size: 42px;
    font-weight:700;
`
export const Subtitle = styled.p`
    font-family:'Roboto';
    font-size:14px;
    font-weight:500;

`

export const ImgWarpper = styled.div `
    display:flex;
`;
export const Img = styled.img`
    padding-right:0;
    border:0;
    max-width:100%;
    width:431px;
    height:431px;
    max-height:500px;

`
