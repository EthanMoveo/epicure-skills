import React from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard.component';
import GenericSwiper from '../SharedComponents/GenericSwiper/GenericSwiper.component';
import { Restaurant } from '../../constants/interfaces/Restaurant';



interface RestaurantSwiperProps {
  restaurants: Restaurant[];
}

const RestaurantSwiper: React.FC<RestaurantSwiperProps> = ({ restaurants }) => {
  return (
    <GenericSwiper
      items={restaurants}
      renderCard={(restaurant, index) => (
        <RestaurantCard  key={index} {...restaurant} />
      )}
    />
  );
};

export default RestaurantSwiper;
