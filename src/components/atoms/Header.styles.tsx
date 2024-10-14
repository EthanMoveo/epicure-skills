import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 46px; 
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
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 13px 0;
`;

export const LogoIcon = styled.img`
  width: 32.93px;
  height: 32px;
  position: absolute; 
  left: 50%; 
  transform: translateX(-50%); 
  margin: 7px 0;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 20px;
`;
