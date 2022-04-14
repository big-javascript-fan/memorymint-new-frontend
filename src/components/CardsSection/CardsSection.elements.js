import styled from "styled-components";
import { devices } from "../constant";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.041);
  height: 356px;
  width: 487px;
  border-radius: 10px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0px 30px;
  box-shadow: inset 26.4526px -26.4526px 26.4526px rgba(194, 194, 194, 0.041), inset -26.4526px 26.4526px 26.4526px rgba(255, 255, 255, 0.041);
  backdrop-filter: blur(92.0549px); 
}
`;

export const IconSec = styled.p`

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
