import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage2.png";
export const Container = styled.div`
  background-color: #010101;
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
  flex-wrap: wrap;
  padding: 0px 180px 0px 200px;
  height: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  
  @media ${devices.laptop} {
    padding: 0px 50px 0px 50px;
  }
  @media ${devices.mobileL} {
    padding: 0px 10px 0px 10px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.041);
  height: 300px;
  width: 487px;
  border-radius: 10px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:15px 30px;
  box-shadow: inset 26.4526px -26.4526px 26.4526px rgba(194, 194, 194, 0.041), inset -26.4526px 26.4526px 26.4526px rgba(255, 255, 255, 0.041);
  backdrop-filter: blur(92.0549px); 
  @media ${devices.laptopL} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media ${devices.laptopM} {
    height: auto;
    width: auto;
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media ${devices.laptop} {
    height: auto;
    width: auto;
    margin-top: 20px;
  }
}
`;

export const TitleSec = styled.h1`
font-size:32px;
margin-bottom:30px;
margin-top:30px;
@media ${devices.laptop} {
  font-size:18px
}
@media ${devices.mobileL} {
  font-size:14px

}
}
`;
export const DescriptionSec = styled.p`
text-align: center;
font-size:18px
@media ${devices.laptop} {
  font-size:14px
}
@media ${devices.mobileL} {
  font-size:12px

}
}
`;
