import React from 'react';
import GenericCard from '../SharedComponents/GenericCard/GenericCard.component';
import styles from './chefRestaurantCard.module.scss';

interface ChefRestaurantCardProps {
  id: number;
  restaurantName: string;
  picture: string;
}

const ChefRestaurantCard: React.FC<ChefRestaurantCardProps> = ({restaurantName, picture }) => {
  return (
    <GenericCard picture={picture}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{restaurantName}</div>
      </div>
    </GenericCard>
  );
};

export default ChefRestaurantCard;
