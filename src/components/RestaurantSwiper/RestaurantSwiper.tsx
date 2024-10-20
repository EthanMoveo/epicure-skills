import React from 'react';
import RestaurantCard from './../RestaurantCard/RestaurantCard';
import GenericSwiper from './../GenericSwiper/GenericSwiper';

interface Restaurant {
  picture: string;
  restaurantName: string;
  chefName: string;
  rating: number;
}

interface RestaurantSwiperProps {
  restaurants: Restaurant[];
}

const RestaurantSwiper: React.FC<RestaurantSwiperProps> = ({ restaurants }) => {
  return (
    <GenericSwiper
      items={restaurants}
      renderCard={(restaurant, index) => (
        <RestaurantCard
          key={index}
          picture={restaurant.picture}
          title={restaurant.restaurantName}
          subtitle={restaurant.chefName}
          rating={restaurant.rating}
        />
      )}
    />
  );
};

export default RestaurantSwiper;
