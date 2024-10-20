import styled, {css} from 'styled-components';

import { colors } from './../constants/colors'; 
import { fonts } from './../constants/fonts'; 
import backgroundImageMobile from './../assets/pictures/Hero.png'
import backgroundImageDesktop from './../assets/pictures/Hero-Desktop.png'


export const HeroContainer = styled.section`
  background-image: url(${backgroundImageMobile});
  background-size: cover;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 65px 0px;

  @media (min-width: 1440px) {
    background-image: url(${backgroundImageDesktop});
    padding: 236px 332px;
  }
`;


export const TextContainer = styled.div`
  background-color: ${colors.SECONDARY.LIGHTWHITE};
  opacity: 0.88;
  padding: 16px 10px;
  width: 335px;
  
  @media (min-width: 1440px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 38px 0px;
  }
`;

export const HeroText = styled.h1`
  ${fonts.MOBILE.H1}
  letter-spacing: 1.97px;

  
  @media (min-width: 1440px) {
    ${fonts.DESKTOP.H1}
    padding: 0px 186px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 6px 12px;
  gap: 8px;
  width: 315px;
  border: 0.5px solid ${colors.PRIMARY.BLACK} ;
  background-color: ${colors.SECONDARY.LIGHTWHITE};
  opacity: 0.88;  
  @media (min-width: 1440px) {
    width: 505px;
    gap: 16px;
  }
`;

export const SearchIconImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  @media (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;


export const SearchInput = styled.input`
  border: none;
  ${fonts.MOBILE.H1}
  font-size: 12px;
  width: 100%;
  
  outline: none;

  @media (min-width: 1440px) {
    ${fonts.DESKTOP.H1}
    font-size: 24px;
    padding: 5px 0px;

  }

  &::placeholder {
    ${fonts.MOBILE.H1}
    font-size: 12px;
    letter-spacing: 1.29px;

    @media (min-width: 1440px) {
      ${fonts.DESKTOP.H1}
      font-size: 24px;
      
  }
}
`;
