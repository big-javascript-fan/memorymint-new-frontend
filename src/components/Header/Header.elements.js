import styled from 'styled-components'
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 200px;
    align-items: center;
    background: #000;
    box-shadow: inset 38.1388px -38.1388px 38.1388px rgba(149, 149, 149, 0.01), inset -38.1388px 38.1388px 38.1388px rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(25.1716px);
`

export const Logo = styled.div`
 color: #fff;
`

export const HomeMenu= styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  :hover {
    transform:scale(1.25, 1.25);
  }
  
`