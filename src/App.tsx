import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
// import RestaurantSection from "./components/RestaurantSection"
import './App.css'
// import RestaurantCard from "./components/RestaurantCard/RestaurantCard"
import RestaurantSwiper from "./components/RestaurantSwiper/RestaurantSwiper";
import pic1 from './assets/pictures/claro.png';
import icon1 from './assets/icons/more.svg'
import GenericSection from "./components/GenericSection/GenericSection";

const restaurants = [
  {
    picture: pic1,
    restaurantName: 'Claro',
    chefName: 'Ran Shmueli',
    rating: 5,
  },
  {
    picture: pic1,
    restaurantName: 'Lumina',
    chefName: 'Meir Adoni',
    rating: 4,
  },
  {
    picture: pic1,
    restaurantName: 'Tiger Lilly',
    chefName: 'Yanir Green',
    rating: 3,
  },
  {
    picture: pic1,
    restaurantName: 'Miznon',
    chefName: 'Eyal Shani',
    rating: 5,
  },
  {
    picture: pic1,
    restaurantName: 'Bubaleh',
    chefName: 'Assaf Granit',
    rating: 4,
  },
  {
    picture: pic1,
    restaurantName: 'OCD',
    chefName: 'Raz Rahav',
    rating: 3,
  },
];


function App() {

  return (
    <>
    <Header />
    <Hero />
    <GenericSection
      title="Popular restaurant in epicure:" 
      swiperComponent={<RestaurantSwiper restaurants={restaurants} />} 
      showText={true}
      text="All Restaurants" 
      icon={icon1}
    />
    </>
  )
}

export default App
