import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection";
import { restaurants } from "./constants/restaurants";
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
