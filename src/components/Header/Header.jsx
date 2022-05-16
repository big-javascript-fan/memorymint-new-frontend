import React, { useEffect, useState } from "react";
import HomeIcon from "../common/icons/HomeIcon";
import { HeaderContainer, Logo, HomeMenu, MintBtn, RightContainer } from "./Header.elements";
import {
	connectWallet,
	getCurrentWalletConnected,
} from "../../utils/interact";

const Header = () => {
	const [walletAddress, setWallet] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		async function init() {
			const { address, status } = await getCurrentWalletConnected();
			setWallet(address);
			setStatus(status);
			addWalletListener();
		}

		init();
		return null;
	}, []);

	function addWalletListener() {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", (accounts) => {
				if (accounts.length > 0) {
					setWallet(accounts[0]);
					setStatus("👆🏽 Write a message in the text-field above.");
				} else {
					setWallet("");
					setStatus("🦊 Connect to Metamask using the top right button.");
				}
			});
		} else {
			setStatus(
				<p>
					{" "}
					🦊{" "}
					<a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
						You must install Metamask, a virtual Ethereum wallet, in your
						browser.
					</a>
				</p>
			);
		}
	}

	const handleClick = async () => {
		const walletResponse = await connectWallet();
		setStatus(walletResponse.status);
		setWallet(walletResponse.address);
	};

	return (
		<HeaderContainer id="header">
			<Logo onClick={() => window.location.href = '/'}>TheMemoryMint</Logo>
			<RightContainer>
				<HomeMenu id="header" onClick={() => {
					console.log('here');
					window.location.href = '/';
				}}>
					<HomeIcon />
				</HomeMenu>
				<MintBtn
					onClick={handleClick}
				>
					{walletAddress.length > 0 ? (
						"Connected: " +
						String(walletAddress).substring(0, 6) +
						"..." +
						String(walletAddress).substring(38)
					) : (
						<span>Connect Wallet</span>
					)}
				</MintBtn>
			</RightContainer>

		</HeaderContainer>
	);
};

export default Header;
