import styled from "styled-components";
import { devices } from "../constant";
import img from "../../assets/img/Bgimage3.png";

export const Container = styled.div`

  height: 1080px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px 0px;
  background-image: url(${img});

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
  padding: 0px 180px 0px 200px;
  height: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0.73) 0%,
    #000000 100%
  );
  @media ${devices.laptopM} {
    padding: 0px 50px 0px 50px;
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
export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.laptopM} {
    justify-content: center;
  }
  
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  @media ${devices.laptopM} {
    margin-bottom: 20px;
  }
`;

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  padding-bottom: 100px;
  @media ${devices.laptopM} {
    font-size: 32px;
    padding-bottom: 80px;

  }
  @media ${devices.laptop} {
    font-size: 24px;
    padding-bottom: 50px;

  }
  @media ${devices.mobileL} {
    font-size: 18px;
    padding-bottom: 20px;

  }
`;
export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Questions = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;

  @media ${devices.laptopM} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
export const QAContainer = styled.div`
  padding: 30px 0px 15px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  margin-right: 25px;
  border-bottom: 1px solid gray;
  @media ${devices.laptopM} {
    font-size: 18px;
    padding: 20px 0px 10px 0px;

  }
  @media ${devices.laptop} {
    font-size: 14px;
    padding: 10px 0px 5px 0px;

  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
export const IconContainer = styled.div`
  cursor: pointer;
`;
export const Answer = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  font-weight: 400;
  font-size: 18px;
  line-height: 31px;
  /* identical to box height, or 172% */

  color: #ffffff;

  margin-left: 10px;
  @media ${devices.laptopM} {
    font-size: 15px;
  }
  @media ${devices.laptop} {
    font-size: 13px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  font-family: "Avenir Next LT Pro";
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  background-color: #f94144;
  border-radius: 8px;
  border: none;
  padding: 20px 30px;
  margin-top: 100px;
`;

export const ImgWarpper = styled.div`
  display: flex;
  position: relative;
`;
export const Img = styled.img`
  width: 439px;
  @media ${devices.laptopL} {
    width: 400px;
  }
  @media ${devices.laptopM} {
    width: 300px;
  }
  @media ${devices.laptop} {
    width: 250px;
  }
  @media ${devices.mobileL} {
   display:none;
  }
`;
export const ListContainer = styled.ul`
  margin-top: 80px;
`;

export const List = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 20px;
  @media ${devices.laptopM} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;
