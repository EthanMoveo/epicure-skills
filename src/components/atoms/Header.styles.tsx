import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 46px;

  @media (min-width: 1440px) {
    height: 36px;
    margin: 14px 127px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-top: 11px;
  margin-bottom: 11px;
  margin-left: 20px;

  @media (min-width: 1440px) {
    display: none; /* Cacher le menu hamburger sur desktop */
  }
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoIcon = styled.img`
  width: 32.93px;
  height: 32px;
  margin: 7px 0;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  @media (min-width: 1440px) {
    position: static;
    transform: none;
    margin-left: 0;
    margin-top: 15.5px;

  }
`;

export const PlatformName = styled.span`
  display: none;
  margin-left: 10px; /* Espacement entre le logo et le nom de la plateforme */
  font-size: 27px;
  font-weight: 200;
  font-family: 'Helvetica Neue';
  line-height: 32.64px;
  color: #000000;

  @media (min-width: 1440px) {
    display: inline-block; /* Afficher le nom de la plateforme sur desktop */
        margin-top: 15.5px;

  }
`;

export const NavLinks = styled.nav`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    gap: 30px;
    margin-left: 20px; 
    margin-top: 15.5px; 
  }
`;

export const NavLinkItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 200;
  font-family: 'Helvetica Neue';
  font-family: Helvetica Neue;
  line-height: 21.76px;
  letter-spacing: 1.92px;
  margin-top: 5.5px;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  margin-right: 20px;
      
  @media (min-width: 1440px) {
    margin-top: 20px;
    margin-right: 0px;
  }
  
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 13px 0;

`;
