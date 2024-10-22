import React from 'react';
import SearchIcon from './../../assets/icons/search-icon.svg'
import { HeroContainer, TextContainer, HeroText, SearchContainer, SearchInputContainer, SearchIconImg, SearchInput } from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroText>Epicure works with the top chef restaurants in Tel Aviv</HeroText>
      <SearchContainer>
        <SearchInputContainer>
          <SearchIconImg src={SearchIcon} alt="Search" />
          <SearchInput placeholder="Search for restaurant cuisine, chef" />
        </SearchInputContainer>
      </SearchContainer>
    </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
