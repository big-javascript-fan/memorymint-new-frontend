import styled from "styled-components";
import { devices } from "../constant";
import img from '../../assets/img/Bgimage2.png';
export const Container = styled.div`
  
  background-image:url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  @media ${devices.laptopM} {
    height: 800px;
  }
  @media ${devices.laptop} {
    height: 700px;
  }
  @media ${devices.mobileL} {
    height: 500px;  
  }
}
`;

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0px 180px 0px 200px;
  height: 1080px;
  flex-direction: column;
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
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
height: 258px;
width: 487px;
border-radius: 10px;
display: flex;
margin: 10px 10px;
padding:0px 30px;
background: rgba(255, 255, 255, 0.041);
box-shadow: inset 26.4526px -26.4526px 26.4526px rgba(194, 194, 194, 0.041), inset -26.4526px 26.4526px 26.4526px rgba(255, 255, 255, 0.041);
backdrop-filter: blur(92.0549px);
flex-direction: column;
align-items: center;
justify-content: center;

@media ${devices.laptopM} {
  height: 200px;
}
}
`;

export const IconSec = styled.p`

}
`;
export const TitleSec = styled.h1`
font-size:42px;
margin-bottom:100px;
}
`;
export const DescriptionSec = styled.p`
text-align: center;
font-size:18px
}
`;
