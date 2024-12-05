import { useEffect } from 'react';
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
import { fetchAboutUs } from '../store/thunks/aboutUs.thunk';
import { fetchHero } from '../store/thunks/hero.thunk';

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurantsSwiper, sectionTitle: restaurantsSectionTitle } = useSelector((state: RootState) => state.restaurantSwiper);
  const { dishesSwiper, sectionTitle: dishesSectionTitle } = useSelector((state: RootState) => state.dishSwiper);
  const {chef, chefRestaurants } = useSelector((state: RootState) => state.chefWeek);


  console.log(chef, chefRestaurants)

  useEffect(() => {
    dispatch(fetchHero());
    dispatch(fetchRestaurantSwiper());
    dispatch(fetchDishSwiper());
    dispatch(fetchChefOfTheWeek());
    dispatch(fetchAboutUs());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <GenericSection<Restaurant>
        title={restaurantsSectionTitle} 
        items={restaurantsSwiper} 
        CardComponent={RestaurantCard}
        text="All Restaurants" 
      />
      <Slide triggerOnce duration={2000}>
        <GenericSection
          title={dishesSectionTitle}
          items={dishesSwiper} 
          CardComponent={DishCard}
        />
      </Slide>
      <Fade triggerOnce duration={1000} delay={500}>    
      <ChefSection 
        /> 
      </Fade>

      <AboutUs />
      <Footer />
    </>
  );
}

export default HomePage;