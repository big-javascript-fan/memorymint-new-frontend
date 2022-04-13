import styled from 'styled-components'
import bg2 from "../../assets/img/Bgimage2.png";

export const Container = styled.div `
margin-right:auto;
margin-left:auto;
padding:0px 200px 0px 200px;
background-image: url(${bg2});
height:500px
}
`;

export const InfoRow = styled.div`
display:flex;
align-items: flex-end;
padding-top:150px
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
font-size:18px;
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
width:231px;
height:231px;
max-height:500px;
p
`
