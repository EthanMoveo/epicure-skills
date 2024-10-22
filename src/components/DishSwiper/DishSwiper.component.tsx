import React from 'react';
import DishCard from '../DishCard/DishCard.component'; 
import GenericSwiper from '../SharedComponents/GenericSwiper/GenericSwiper.component';
import { Dish } from '../../constants/interfaces/Dish'; 

interface DishSwiperProps {
  dishes: Dish[];
}

const DishSwiper: React.FC<DishSwiperProps> = ({ dishes }) => {
  return (
    <GenericSwiper
      items={dishes}
      renderCard={(dish, index) => (
        <DishCard key={index} {...dish} />
      )}
    />
  );
};

export default DishSwiper;
