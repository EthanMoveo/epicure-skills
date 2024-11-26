import { useEffect } from 'react';
import { Skeleton } from '@mui/material';
import {useDispatch, useSelector } from 'react-redux';
import {  RootState, AppDispatch } from '../store/store';
import { fetchDishSwiper } from '../store/thunks/dish.thunk';
import { fetchRestaurantSwiper } from '../store/thunks/restaurant.thunk';
import { fetchChefOfTheWeek } from '../store/thunks/chefOfTheWeek.thunk';
import { Fade, Slide } from 'react-awesome-reveal';
import { Restaurant } from '../constants/interfaces/Restaurant';

import Header from "../components/Header/Header.component";
import Hero from "../components/Hero/Hero.component";
import GenericSection from "../components/SharedComponents/GenericSection/GenericSection.component";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard.component";
import DishCard from "../components/DishCard/DishCard.component";
import AboutUs from "../components/AboutUs/AboutUs.component";
import Footer from "../components/Footer/Footer.component";
import ChefSection from "../components/ChefSection/ChefSection.component";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurantsSwiper } = useSelector((state: RootState) => state.restaurantSwiper);
  const { dishesSwiper } = useSelector((state: RootState) => state.dishSwiper);
  // const { chefOfTheWeek } = useSelector((state: RootState) => state.chefOfTheWeek);
  const {chef, chefRestaurants, isLoading: isLoadingChef} = useSelector((state: RootState) => state.chefWeek);

  console.log(chef, chefRestaurants)

  useEffect(() => {
    dispatch(fetchRestaurantSwiper())
    dispatch(fetchDishSwiper());
    // dispatch(fetchChefOfTheWeek());
    dispatch(fetchChefOfTheWeek());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <GenericSection<Restaurant>
        title="Popular restaurant in epicure" 
        items={restaurantsSwiper} 
        CardComponent={RestaurantCard}
        text="All Restaurants" 
      />
      <Slide triggerOnce duration={2000}>
        <GenericSection
          title="Signature dish of" 
          items={dishesSwiper} 
          CardComponent={DishCard}
        />
      </Slide>
      <Fade triggerOnce duration={1000} delay={500}>
        {chef ?      
           <ChefSection 
          title="Chef of the week"
          image={chef.image} 
          text={chef.description}
          subtitle={`${chef.name}'s Restaurants`}
          restaurants={chefRestaurants}
        /> : 
        <Skeleton variant="text" width={300} height={300} style={{ marginLeft: '10px' }} />
        }
      </Fade>

      <AboutUs />
      <Footer />
    </>
  );
}

export default HomePage;