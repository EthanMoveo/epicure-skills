import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton

 } from '@mui/material';
import { RootState, AppDispatch } from '../../store/store';
import { fetchNavbar } from '../../store/thunks/navbar.thunk';
import Logo from './../../assets/icons/logo-epicure.svg';
import HamburgerMenu from './../../assets/icons/hamburger-menu.svg';
import ProfileIcon from './../../assets/icons/profile-icon.svg';
import SearchIcon from './../../assets/icons/search-icon.svg';
import BagIcon from './../../assets/icons/bag-icon.svg';
import { HeaderContainer, LeftSection, MenuButton, MenuIcon, LogoIcon, PlatformName, NavLinks, NavLinkItem, IconGroup, Icon } from './Header.styles.tsx';
import UserProfileBubble from '../ProfileBubble/UserProfileBubble.component.tsx';
const Header: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { items: navbarItems, isLoading } = useSelector((state: RootState) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbar());
  }, [dispatch]);
  return (
    <HeaderContainer>
      <LeftSection>
        <MenuButton>
          <MenuIcon src={HamburgerMenu} alt="Menu" />
        </MenuButton>
        <LogoIcon src={Logo} alt="Logo" />
        <PlatformName>EPICURE</PlatformName>
        <NavLinks>
          {isLoading ? (
            <Skeleton width={100} height={20} />
          ) : (
            navbarItems.map((navItem) => (
              <NavLinkItem key={navItem.link} href={navItem.link}>
                {navItem.item}
              </NavLinkItem>
            ))
          )}
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
