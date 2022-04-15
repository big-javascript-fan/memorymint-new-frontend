import React from "react";
import MoveTop from "../common/icons/MoveTop";
import {
  FooterContainer,
  Logo,
  FooterMenu,
  CopyRightSec,
} from "./Footer.elements";
const Footer = () => {
  const scrollTo = (elem) => {
    const anchor = document.querySelector(`#${elem}`);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <FooterContainer id="footer">
      <Logo>TheMemoryMint</Logo>
      <CopyRightSec>All rights reserved 2022. Visible Things</CopyRightSec>
      <FooterMenu onClick={() => scrollTo("header")}>
        Top{' '}<MoveTop />
      </FooterMenu>
    </FooterContainer>
  );
};

export default Footer;
