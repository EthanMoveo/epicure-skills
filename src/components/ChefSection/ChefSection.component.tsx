import React from 'react';

import styles from './chefSection.module.scss';
import useIsDesktop from '../../hooks/useIsDesktop.hook';
import ChefRestaurantCard from '../ChefRestaurantCard/ChefRestaurantCard.component';
import GenericSwiper from '../SharedComponents/GenericSwiper/GenericSwiper.component';
import { ChefRestaurants } from '../../constants/interfaces/ChefRestaurants';
import { DeviceType } from '../../constants/types/DeviceType';

interface ChefSectionProps {
  title: string;
  image: string;
  text: string;
  subtitle: string;
  restaurants: ChefRestaurants[];

}

const ChefSection: React.FC<ChefSectionProps> = ({ title, image, text, subtitle, restaurants }) => {
  const isDesktop = useIsDesktop(DeviceType.DESKTOP); 
  
  return (
    <section className={styles.sectionChef}>
      <div className={styles.title}>{title}</div>
      <div className={styles.chefDescription}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.chefRestaurants}>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.restaurantsContainer}>
        { isDesktop ?
        (<div className={styles.restaurantsGrid}>
          {restaurants.map((restaurant, index) => (
            <ChefRestaurantCard
              key={index}
              id={restaurant.id}
              restaurantName={restaurant.restaurantName}
              picture={restaurant.picture}
            />
          ))}
        </div>) 
        :
         (<GenericSwiper CardComponent={ChefRestaurantCard} items={restaurants} />)
        }
        </div>
      </div>

    </section>
  );
};

export default ChefSection;
