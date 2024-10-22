import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import SectionIcons from "./components/SectionIcons/SectionIcons.component";
import AboutUs from "./components/AboutUs/AboutUs.component";
import Footer from "./components/Footer/Footer.component";
import { restaurants } from "./constants/data/restaurants";
import { icons } from "./constants/data/icons";
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
    <SectionIcons icons={icons} />
    <AboutUs />
    <Footer />
    </>
  )
}

export default App
