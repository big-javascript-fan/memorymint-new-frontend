import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333333aa;

  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: ${(props) => (props.show ? '3' : '-3')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`;

export const ModalContainer = styled.div`
  width: 100vw;
	height: 100vh;
  padding: 27px 30px 41px 30px;
  background: #0A0F12;
  box-shadow: '0px 0px 20px rgba(0, 0, 0, 0.4)';
  position: relative;
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ImgConatiner = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`