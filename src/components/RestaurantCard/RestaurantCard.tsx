import React from 'react';
import GenericCard from './../GenericCard/GenericCard';
import fullStar from './../../assets/icons/star-full.svg';
import emptyStar from './../../assets/icons/star-empty.svg';
import styles from './restaurantCard.module.scss';

const RestaurantCard: React.FC<{ picture: string; title: string; chefName: string; rating: number }> = ({
  picture,
  title,
  chefName,
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
      picture={picture} 
    >
      <div className={styles.cardContentRestaurant}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.chefName}>{chefName}</p>
      {stars}
      </div>
    </GenericCard>
  );
};

export default RestaurantCard;
