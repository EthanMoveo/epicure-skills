import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import SearchIcon from './../../assets/icons/search-icon.svg'
import { HeroContainer, TextContainer, HeroText, SearchContainer, SearchInputContainer, SearchIconImg, SearchInput } from './Hero.styles';

const Hero: React.FC = () => {
  const {text, inputPlaceholder, background } = useSelector((state: RootState) => state.hero);
  const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

  return (
    <HeroContainer background={`${STRAPI_BASE_URL}${background}`}>
      <TextContainer>
        <HeroText>{text}</HeroText>
      <SearchContainer>
        <SearchInputContainer>
          <SearchIconImg src={SearchIcon} alt="Search" />
          <SearchInput placeholder={inputPlaceholder} />
        </SearchInputContainer>
      </SearchContainer>
    </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
