import React, { useEffect, useState } from "react";
import HomeIcon from "../common/icons/HomeIcon";
import { HeaderContainer, Logo, HomeMenu, MintBtn, RightContainer } from "./Ads.elements";
import {
	connectWallet,
	getCurrentWalletConnected,
} from "../../utils/interact";

const Ads = () => {
	const [walletAddress, setWallet] = useState('');
	const [status, setStatus] = useState('');

  const handleClick = () => {
    window.open('/sale', '_self');
  }
	return (
		<HeaderContainer id="header">
			<Logo onClick={() => window.location.href = '/'}>The Sommer Shiels NFT Collection is on sale</Logo>
			<RightContainer>
				<MintBtn
					onClick={handleClick}
				>
          <span>Go To Mint --></span>
				</MintBtn>
			</RightContainer>

		</HeaderContainer>
	);
};

export default Ads;
