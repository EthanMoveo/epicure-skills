import styled, {css} from 'styled-components';
import { colors } from './../constants/colors'; 
import { fonts } from './../constants/fonts'; 

import backgroundImageMobile from './../assets/pictures/Hero.png'
import backgroundImageDesktop from './../assets/pictures/Hero-Desktop.png'

export const HeroContainer = styled.section`
  background-image: url(${backgroundImageMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    background-image: url(${backgroundImageDesktop});
    height:696px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const backgroundColorContainer = css`
  background-color: #FFFFFFE0;
  opacity: 0.88;
  
`

export const TextContainer = styled.div`
  margin-bottom: 40px;
  ${backgroundColorContainer}
  
  @media (min-width: 1440px) {
    width: 776px;
    height: 332px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const HeroText = styled.h1`
  font-family: ${fonts.MOBILE.H1.fontFamily};
  font-weight: ${fonts.MOBILE.H1.fontWeight};
  font-size: ${fonts.MOBILE.H1.fontSize};
  color: ${fonts.MOBILE.H1.color};
  letter-spacing: 1.97px;
  padding-right: 10px;
  padding-left: 10px;
  
  @media (min-width: 1440px) {
    width: 412px;
    height: 80px;
    font-family: ${fonts.DESKTOP.H1.fontFamily};
    font-weight: ${fonts.DESKTOP.H1.fontWeight};
    font-size: ${fonts.DESKTOP.H1.fontSize};
    padding: 0px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
  padding-bottom: 16px;

`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.PRIMARY.black};
  border-radius: 4px;
  padding: 6px 12px;
  gap: 8px;
  width: 315px;
  height: 30px;
  border: 0.5px solid #000000;
  ${backgroundColorContainer}
  
  @media (min-width: 1440px) {
   width: 505px;
   height: 48px;
  }
`;

export const SearchIconImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;

const desktopFontStyles = css`
  font-family: ${fonts.DESKTOP.H1.fontFamily};
  font-weight: ${fonts.DESKTOP.H1.fontWeight};
  font-size: 24px;
  padding: 0px;
  height: 50px;
`;


export const SearchInput = styled.input`
  border: none;
  
  font-family: 'Helvetica Neue';
  font-size: 12px;
  width: 100%;
  margin-left: 10px;
  
  outline: none;

  @media (min-width: 1440px) {
    ${desktopFontStyles}

  }

  &::placeholder {
    color: ${colors.PRIMARY.black};
    font-family: 'Helvetica Neue';
    font-weight: 200;
    font-size: 12px;
    letter-spacing: 1.29px;

    @media (min-width: 1440px) {
      ${desktopFontStyles}
  }
}
`;
