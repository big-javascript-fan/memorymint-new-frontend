import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage2.png";

export const Container = styled.div`
  height: 1080px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0px;
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
}
`;


export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 180px 0px 200px;
  height: 100%;
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
export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
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

export const ImgWarpper = styled.div`
  display: flex;
`;
export const Img = styled.img`
  max-width: 100%;
  max-height: 500px;
`;

export const TextWrapper = styled.div`
  width: 574px;
  border-radius: 10px;
  padding: 30px;
  background-color:#111111;
  margin-top: 30px;
  @media ${devices.laptopM} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const Title = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 30px;

@media ${devices.laptopM} {
  font-size: 24px;
}
@media ${devices.laptop} {
  font-size: 18px;
}
@media ${devices.mobileL} {
  font-size: 16px;
}
`;

export const ListContainer = styled.ul`
  margin-top: 35px;
  list-style-type: none;
`;

export const List = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 20px;
  @media ${devices.laptopM} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 16px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
