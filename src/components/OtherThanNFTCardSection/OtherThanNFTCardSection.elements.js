import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage2.png";
export const Container = styled.div`
  
  background-image:url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0px;
  

}
`;

// @media ${devices.laptop} {
//   height: 700px;
// }
// @media ${devices.mobileL} {
//   height: 500px;
// }
// }

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 180px 0px 200px;
  flex-direction: column;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  @media ${devices.laptopM} {
  }
  @media ${devices.laptop} {
    padding: 0px 50px 0px 50px;
  }
  @media ${devices.mobileL} {
    padding: 0px 10px 0px 10px;
  }
`;
// @media ${devices.laptop} {
//   height: 700px;
// }
// @media ${devices.mobileL} {
//   height: 500px;
// }
// }

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 487px;
  border-radius: 10px;
  display: flex;
  margin: 10px 10px;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.041);
  box-shadow: inset 26.4526px -26.4526px 26.4526px rgba(194, 194, 194, 0.041),
    inset -26.4526px 26.4526px 26.4526px rgba(255, 255, 255, 0.041);
  backdrop-filter: blur(92.0549px);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.laptopM} {
    width: 400px;
    padding: 20px 25px;
  }
  @media ${devices.laptop} {
    width: 380px;
    padding: 20px 20px;
  }
  @media ${devices.mobileL} {
    width: 350px;
    padding: 20px 10px;
  }
`;

export const IconSec = styled.div`
  margin: 15px 0px;
}
`;
export const TitleSec = styled.h1`
font-size:42px;
margin-top: 30px;
@media ${devices.laptopM} {
  font-size:32px;
  margin-bottom: 20px;
}
@media ${devices.laptop} {
  font-size:22px;
  margin-bottom:20px;
@media ${devices.mobileL} {
  font-size:16px;
  margin-bottom:20px;
}
`;
export const DescriptionSec = styled.p`
  text-align: center;
  font-size: 18px @media ${devices.laptopM} {
    font-size: 16px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
