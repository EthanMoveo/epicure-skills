import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper";
import GenericSection from "./components/GenericSection/GenericSection";
import { restaurants } from "./constants/restaurants";


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
