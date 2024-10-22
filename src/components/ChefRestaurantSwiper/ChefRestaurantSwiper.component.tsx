import React from 'react';
import ChefRestaurantCard from '../ChefRestaurantCard/ChefRestaurantCard.component';
import GenericSwiper from '../SharedComponents/GenericSwiper/GenericSwiper.component';
import { Restaurant } from '../../constants/interfaces/Restaurant';

interface ChefRestaurantSwiperProps {
  restaurants: Restaurant[];
}

const ChefRestaurantSwiper: React.FC<ChefRestaurantSwiperProps> = ({ restaurants }) => {
  return (
    <GenericSwiper
      items={restaurants}
      renderCard={(restaurant, index) => (
        <ChefRestaurantCard key={index} title={restaurant.restaurantName} picture={restaurant.picture} />
      )}
    />
  );
};

export default ChefRestaurantSwiper;
