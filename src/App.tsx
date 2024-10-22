import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import { restaurants } from "./constants/data/restaurants";
import './App.css'
import SectionIcons from "./components/SectionIcon/SectionIcons";
import AboutUs from "./components/AboutUs/AboutUs";

import iconSpicy from './assets/icons/spicy-icon.svg';
import iconVegetarian from './assets/icons/vegetarian-icon.svg';
import iconVegan from './assets/icons/vegan-icon.svg';
import Footer from "./components/Footer/Footer";


function App() {

  const icons = [
    { icon: iconSpicy , text: 'Spicy' },
    { icon: iconVegetarian, text: 'Vegetarian' },
    { icon: iconVegan,  text: 'Vegan' },
  ];

  return (
    <>
    <Header />
    <Hero />
    <GenericSection
      title="Popular restaurant in epicure:" 
      swiperComponent={<RestaurantSwiper restaurants={restaurants} />} 
      text="All Restaurants" 
    />
    <SectionIcons icons={icons} />
    <AboutUs />
    <Footer />
    </>
  )
}

export default App
