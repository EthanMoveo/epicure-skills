import Header from "./components/Header/Header.component"
import Hero from "./components/Hero/Hero.component"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper.component";
import DishSwiper from "./components/DishSwiper/DishSwiper.component";
import GenericSection from "./components/SharedComponents/GenericSection/GenericSection.component";
import ChefSection from "./components/ChefSection/ChefSection.component";
import chefPic from "./assets/pictures/Chef.png";
import { restaurants } from "./constants/data/restaurants";
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
      swiperComponent={<RestaurantSwiper restaurants={restaurants} />} 
      text="All Restaurants" 
    />
    <GenericSection
      title="Signature dish of:" 
      swiperComponent={<DishSwiper dishes={dishes} />} 
      text="" 
    />
    <ChefSection title="Chef of the week" image={chefPic} text="Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish." subtitle="Yossi's Restaurants" restaurants={chefRestaurants}/>
    </>
  )
}

export default App
