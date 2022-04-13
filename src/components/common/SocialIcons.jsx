import React from 'react'
import styled from "styled-components";
import Twitter from '../common/icons/TwitterIcon';
import Discord from '../common/icons/DiscordIcon';
import Instgram from '../common/icons/InstagramIcon';
import Telegram from '../common/icons/TelegramIcon';
const Container = styled.div`
    width: 30px;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    min-height: 200px;
`
const MenuItem = styled.div`
    cursor: pointer;
`
const SocialIcons = () => {
  return (
    <Container>
        <Menu>
            <MenuItem onClick={() => {
                //TODO: Click handler
            }}>
                <Twitter/>
            </MenuItem>
            <MenuItem onClick={() => {
                //TODO: Click handler
            }}>
                <Telegram/>
            </MenuItem>
            <MenuItem onClick={() => {
                //TODO: Click handler
            }}>
                <Instgram/>
            </MenuItem>
            <MenuItem onClick={() => {
                //TODO: Click handler
            }}>
                <Discord/>
            </MenuItem>
        </Menu>
    </Container>
  )
}

export default SocialIcons