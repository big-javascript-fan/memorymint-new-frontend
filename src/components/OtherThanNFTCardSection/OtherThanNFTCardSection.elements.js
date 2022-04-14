import styled from "styled-components";
import { devices } from "../constant";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0px 180px 0px 200px;
  height: 1080px;
  background-color: #010101;
  flex-direction: column;

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
