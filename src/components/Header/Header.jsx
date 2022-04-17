import React from "react";
import HomeIcon from "../common/icons/HomeIcon";
import { HeaderContainer, Logo, HomeMenu } from "./Header.elements";

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Logo>TheMemoryMint</Logo>
      <HomeMenu id="header">
        <HomeIcon />
      </HomeMenu>
    </HeaderContainer>
  );
};

export default Header;
