import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import { restaurants } from "./constants/data/restaurants";
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
    </>
  )
}

export default App
