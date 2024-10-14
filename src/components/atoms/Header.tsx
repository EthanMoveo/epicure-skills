import React from 'react';

import Logo from './../../assets/icons/logo-epicure.svg';
import HamburgerMenu from './../../assets/icons/hamburger-menu.svg';
import ProfileIcon from './../../assets/icons/profile-icon.svg';
import SearchIcon from './../../assets/icons/search-icon.svg';
import BagIcon from './../../assets/icons/bag-icon.svg';
import { HeaderContainer, MenuButton, MenuIcon, Icon, LogoIcon, IconGroup } from './Header.styles.tsx';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MenuButton>
        <MenuIcon src={HamburgerMenu} alt="Menu" />
      </MenuButton>
      <LogoIcon src={Logo} alt="Logo" />
      <IconGroup>
        <Icon src={SearchIcon} alt="Search" />
        <Icon src={ProfileIcon} alt="Profile" />
        <Icon src={BagIcon} alt="Bag" />
      </IconGroup>
    </HeaderContainer>
  );
};

export default Header;
