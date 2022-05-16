import React from "react";
import MoveTop from "../common/icons/MoveTop";
import {
  FooterContainer,
  Logo,
  FooterMenu,
  CopyRightSec,
} from "./Footer.elements";
const Footer = () => {
  const scrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
  };
  return (
    <FooterContainer id="footer">
      <Logo>TheMemoryMint</Logo>
      <CopyRightSec>All rights reserved 2022. Visible Things</CopyRightSec>
      <FooterMenu onClick={() => scrollTo()}>
        <MoveTop/>
      </FooterMenu>
    </FooterContainer>
  );
};

export default Footer;
