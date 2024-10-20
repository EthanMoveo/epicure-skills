import React from 'react';
import GenericCard from './../GenericCard/GenericCard';
import fullStar from './../../assets/icons/star-full.svg';
import emptyStar from './../../assets/icons/star-empty.svg';
import styles from './restaurantCard.module.scss';

const RestaurantCard: React.FC<{ picture: string; title: string; subtitle: string; rating: number }> = ({
  picture,
  title,
  subtitle,
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
      title={title} 
      className={styles.cardRestaurant} 
      contentClassName={styles.cardContentRestaurant} 
    >
      <p className={styles.chefName}>{subtitle}</p>
      {stars}
    </GenericCard>
  );
};

export default RestaurantCard;
