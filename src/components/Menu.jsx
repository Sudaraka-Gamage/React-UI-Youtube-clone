import React from 'react'
import styled from 'styled-components'
import MyTube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
    flex: 1.5;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 13px;
`;
const Wrapper = styled.div`
    padding: 12px 26px;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    padding: 3.6px 5px;

    &:hover {
      background-color: ${({ theme}) => theme.soft};
    }
`;

const Hr = styled.hr`
  margin: 12px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #aaaaaa;
  margin-bottom: 12px;
  padding-left: 30px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
              <Img src={MyTube}/>
              MyTube
            </Logo>
        </Link>
            <Item>
              <HomeIcon/>
              Home
            </Item>
            <Item>
              <ExploreOutlinedIcon/>
              Explore
            </Item>
            <Item>
              <SubscriptionsOutlinedIcon/>
              Subscriptions
            </Item>
            <Hr/>
            <Item>
              <VideoLibraryOutlinedIcon/>
              Library
            </Item>
            <Item>
              <RestoreOutlinedIcon/>
              History
            </Item>
            <Hr/>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{textDecoration:"none"}}>
              <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
              </Link>
            </Login>
            <Hr/>
            <Title>BEST OF MyTube</Title>
            <Item>
              <LibraryMusicOutlinedIcon/>
              Music
            </Item>
            <Item>
              <SportsBasketballOutlinedIcon/>
              Sports
            </Item>
            <Item>
              <SportsEsportsOutlinedIcon/>
              Gaming
            </Item>
            <Item>
              <MovieOutlinedIcon/>
              Movies
            </Item>
            <Item>
              <NewspaperOutlinedIcon/>
              News
            </Item>
            <Item>
              <LiveTvOutlinedIcon/>
              Live
            </Item>
            <Hr/>
            <Item>
              <SettingsOutlinedIcon/>
              Settings
            </Item>
            <Item>
              <OutlinedFlagIcon/>
              Report
            </Item>
            <Item>
              <HelpOutlineOutlinedIcon/>
              Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
              <SettingsBrightnessOutlinedIcon/>
              {darkMode ? "Light" : "Dark"} Mode
            </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu