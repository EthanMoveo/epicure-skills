import React from 'react';
import GenericCard from '../SharedComponents/GenericCard/GenericCard.component';
import styles from './chefRestaurantCard.module.scss';

interface ChefRestaurantCardProps {
  _id: string;
  name: string;
  image: string;
}

const ChefRestaurantCard: React.FC<ChefRestaurantCardProps> = ({name, image }) => {
  return (
    <GenericCard picture={image}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{name}</div>
      </div>
    </GenericCard>
  );
};

export default ChefRestaurantCard;
