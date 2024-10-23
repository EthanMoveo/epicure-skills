import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard.component";
import DishCard from "./components/DishCard/DishCard.component";
import SectionIcons from "./components/SectionIcons/SectionIcons.component";
import AboutUs from "./components/AboutUs/AboutUs.component";
import Footer from "./components/Footer/Footer.component";
import { restaurants } from "./constants/data/restaurants";
import { icons } from "./constants/data/icons";
import { dishes } from "./constants/data/dishes";
import './App.css'

function App() {


  return (
    <>
    <Header />
    <Hero />
    <GenericSection
      title="Popular restaurant in epicure:" 
      items={restaurants}
      CardComponent={RestaurantCard}
      text="All Restaurants" 
    />
    <GenericSection
      title="Signature dish of:" 
      items={dishes}
      CardComponent={DishCard}
    />
    <SectionIcons icons={icons} />
    <AboutUs />
    <Footer />

    
    </>
  )
}

export default App
