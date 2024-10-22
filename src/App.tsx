import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper.component";
import DishSwiper from "./components/DishSwiper/DishSwiper.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import DishCard from "./components/DishCard/DishCard.component";
import { restaurants } from "./constants/data/restaurants";
import { dishes } from "./constants/data/dishes";
import './App.css'


function App() {

  return (
    <>
    <Header />
    <Hero />
    <GenericSection
      title="Popular restaurant in epicure:" 
      swiperComponent={<RestaurantSwiper restaurants={restaurants} />} 
      text="All Restaurants" 
    />
    <GenericSection
      title="Signature dish of:" 
      swiperComponent={<DishSwiper dishes={dishes} />} 
      text="" 
    />
    
    </>
  )
}

export default App
