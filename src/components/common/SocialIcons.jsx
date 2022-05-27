import React from "react";
import styled from "styled-components";
import Twitter from "../common/icons/TwitterIcon";
import Discord from "../common/icons/DiscordIcon";
import Instgram from "../common/icons/InstagramIcon";
import Telegram from "../common/icons/TelegramIcon";

const Container = styled.div`
  width: 30px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 200px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

const SocialIcons = () => {
	return (
		<Container>
			<Menu>
				<MenuItem
					onClick={() => {
						//TODO: Click handler
					}}
				>
					<Twitter />
				</MenuItem>
				<MenuItem
					onClick={() => {
						window.open('https://www.instagram.com/the_memory_mint_nft/', '_blank');
					}}
				>
					<Instgram />
				</MenuItem>
				<MenuItem
					onClick={() => {
						window.open('https://discord.gg/PphFUbaR', '_blank');
					}}
				>
					<Discord />
				</MenuItem>
			</Menu>
		</Container>
	);
};

export default SocialIcons;
