import { Fade, Slide, JackInTheBox} from 'react-awesome-reveal';


import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard.component";
import DishCard from "./components/DishCard/DishCard.component";
import SectionIcons from "./components/SectionIcons/SectionIcons.component";
import AboutUs from "./components/AboutUs/AboutUs.component";
import Footer from "./components/Footer/Footer.component";
import ChefSection from "./components/ChefSection/ChefSection.component";
import chefPic from "./assets/pictures/Chef.png";
import { restaurants } from "./constants/data/restaurants";
import { icons } from "./constants/data/icons";
import { dishes } from "./constants/data/dishes";
import { chefRestaurants } from "./constants/data/chefRestaurants";
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
    <Slide triggerOnce duration={2000}>
      <GenericSection
        title="Signature dish of:" 
        items={dishes}
        CardComponent={DishCard}
      />
    </Slide>
    <Slide triggerOnce direction='right'>
      <SectionIcons icons={icons} />
    </Slide>
    <Fade triggerOnce duration={1000} delay={500}>
    <ChefSection title="Chef of the week"
      image={chefPic} 
      text="Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, 
      including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. 
      Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish." 
      subtitle="Yossi's Restaurants" 
      restaurants={chefRestaurants}/>
      </Fade>
    <AboutUs />
    <Footer />    
    </>
  )
}

export default App
