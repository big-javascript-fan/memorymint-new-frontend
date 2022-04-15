import React from "react";
import MoveTop from "../common/icons/MoveTop";
import {
  FooterContainer,
  Logo,
  FooterMenu,
  CopyRightSec,
} from "./Footer.elements";
const Footer = () => {
  return (
    <FooterContainer>
      <Logo>TheMemoryMint</Logo>
      <CopyRightSec>All rights reserved 2022. Visible Things</CopyRightSec>
      <FooterMenu>
        Top{' '}<MoveTop />
      </FooterMenu>
    </FooterContainer>
  );
};

export default Footer;
