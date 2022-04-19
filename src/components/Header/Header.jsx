import React from "react";
import HomeIcon from "../common/icons/HomeIcon";
import { HeaderContainer, Logo, HomeMenu } from "./Header.elements";

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Logo onClick={() => window.location.href = '/'}>TheMemoryMint</Logo>
      <HomeMenu id="header" onClick={() => {
          console.log('here');
          window.location.href = '/';
      }}>
        <HomeIcon />
      </HomeMenu>
    </HeaderContainer>
  );
};

export default Header;
