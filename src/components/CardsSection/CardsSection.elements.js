import styled from "styled-components";
import { devices } from "../constant";
import img from '../../assets/img/image6.png';
export const Container = styled.div`
 
  height: 1080px;
  background-color: #010101;
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
export const Card = styled.div`
  background: rgba(255, 255, 255, 0.041);
  height: 356px;
  width: 487px;
  border-radius: 10px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:15px 30px;
  box-shadow: inset 26.4526px -26.4526px 26.4526px rgba(194, 194, 194, 0.041), inset -26.4526px 26.4526px 26.4526px rgba(255, 255, 255, 0.041);
  backdrop-filter: blur(92.0549px); 
}
`;


export const TitleSec = styled.h1`
font-size:32px;
}
`;
export const DescriptionSec = styled.p`
text-align: center;
font-size:18px
}
`;
