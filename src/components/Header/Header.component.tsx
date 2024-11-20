import React from 'react';
import Logo from './../../assets/icons/logo-epicure.svg';
import HamburgerMenu from './../../assets/icons/hamburger-menu.svg';
import ProfileIcon from './../../assets/icons/profile-icon.svg';
import SearchIcon from './../../assets/icons/search-icon.svg';
import BagIcon from './../../assets/icons/bag-icon.svg';
import logoutIcon from './../../assets/icons/logout.svg';
import { HeaderContainer, LeftSection, MenuButton, MenuIcon, LogoIcon, PlatformName, NavLinks, NavLinkItem, IconGroup, Icon } from './Header.styles.tsx';
import UserProfileBubble from '../ProfileBubble/UserProfileBubble.component.tsx';
const Header: React.FC = () => {


  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuButton>
          <MenuIcon src={HamburgerMenu} alt="Menu" />
        </MenuButton>
        <LogoIcon src={Logo} alt="Logo" />
        <PlatformName>EPICURE</PlatformName>
        <NavLinks>
          <NavLinkItem href="#">Restaurants</NavLinkItem>
          <NavLinkItem href="#">Chefs</NavLinkItem>
        </NavLinks>
      </LeftSection>
      <IconGroup>
        <Icon src={SearchIcon} alt="Search" />
        <Icon src={ProfileIcon} alt="Profile" />
        <Icon src={BagIcon} alt="Bag" />
        <UserProfileBubble />
      </IconGroup>
    </HeaderContainer>
  );
};

export default Header;
