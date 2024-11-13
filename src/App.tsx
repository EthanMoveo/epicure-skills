import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './store/store';
import { fetchRestaurants } from './store/thunks/restaurant.thunk';
import { fetchDishes } from './store/thunks/dish.thunk';
import { fetchChefOfTheWeek } from './store/thunks/chefOfTheWeek.thunk';
import { Fade, Slide } from 'react-awesome-reveal';
import { Restaurant } from './constants/interfaces/Restaurant';

import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard.component";
import DishCard from "./components/DishCard/DishCard.component";
import SectionIcons from "./components/SectionIcons/SectionIcons.component";
import AboutUs from "./components/AboutUs/AboutUs.component";
import Footer from "./components/Footer/Footer.component";
import ChefSection from "./components/ChefSection/ChefSection.component";
import { icons } from "./constants/data/icons";
import './App.css';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants } = useSelector((state: RootState) => state.restaurants);
  const { dishes } = useSelector((state: RootState) => state.dishes);
  const { chefOfTheWeek, error } = useSelector((state: RootState) => state.chefOfTheWeek);


  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());
    dispatch(fetchChefOfTheWeek());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Hero />
      <GenericSection<Restaurant>
        title="Popular restaurant in epicure:" 
        items={restaurants} 
        CardComponent={RestaurantCard}
        text="All Restaurants" 
      />
      <Slide triggerOnce duration={2000}>
        <GenericSection
          title="Signature dish of:" 
          items={dishes} 
          CardComponent={DishCard}
        />
      </Slide>
      <Slide triggerOnce direction="right">
        <SectionIcons icons={icons} />
      </Slide>
      <Fade triggerOnce duration={1000} delay={500}>
        {chefOfTheWeek ?      
           <ChefSection 
          title="Chef of the week"
          image={chefOfTheWeek.image} 
          text={chefOfTheWeek.description}
          subtitle={`${chefOfTheWeek.name}'s Restaurants`}
          restaurants={chefOfTheWeek.restaurants}
        /> : error ?
         <div>{error}</div>
          : "No chef of the week available"
        }
      </Fade>

      <AboutUs />
      <Footer />
    </>
  );
}

export default App;