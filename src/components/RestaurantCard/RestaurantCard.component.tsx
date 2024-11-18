import React from 'react';
import GenericCard from '../SharedComponents/GenericCard/GenericCard.component';
import fullStar from './../../assets/icons/star-full.svg';
import emptyStar from './../../assets/icons/star-empty.svg';
import styles from './restaurantCard.module.scss';
import { Restaurant } from '../../constants/interfaces/Restaurant';

const RestaurantCard: React.FC<Restaurant> = ({
  image,
  name,
  chef,
  rating,
}) => {
  const stars = (
    <div className={styles.starContainer}>
      {Array(5).fill(0).map((_, index) => (
        <img
          key={index}
          src={index < rating ? fullStar : emptyStar}
          alt={index < rating ? "Full Star" : "Empty Star"}
        />
      ))}
    </div>
  );

  return (
    <GenericCard 
      picture={image} 
    >
      <div className={styles.cardContentRestaurant}>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.chefName}>{chef ? chef.name : 'Unknown chef'}</div>
      {stars}
      </div>
    </GenericCard>
  );
};

export default RestaurantCard;
