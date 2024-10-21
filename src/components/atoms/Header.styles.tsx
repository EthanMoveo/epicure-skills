import styled from 'styled-components';
import { FONTS } from './../../constants/fonts';
import { COLORS } from './../../constants/colors';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 46px;
  padding: 11px 20px;
  background-color: ${COLORS.PRIMARY.WHITE};
  z-index: 1;

  @media (min-width: 1440px) {
    padding: 14px 127px;
    height: 64px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  width: 24px;
  height: 24px;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  @media (min-width: 1440px) {
    position: static;
    transform: none;
  }
`;

export const PlatformName = styled.span`
  ${FONTS.DESKTOP.H1}
  font-size: 27px;
  line-height: 32px;
  display: none;
  
  @media (min-width: 1440px) {
    display: inline-block; 
    padding-left: 15px;
  }
`;

export const NavLinks = styled.nav`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;
    padding-left: 32px;
  }
`;

export const NavLinkItem = styled.a`
  text-decoration: none;
  ${FONTS.DESKTOP.BODYTEXT}
  font-size: 18px;
  line-height: 21.76px;
  letter-spacing: 1.92px;
  `;


export const IconGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;   

  @media (min-width: 1440px) {
    gap: 24px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
    padding: 13px 0px;
  }
`;
