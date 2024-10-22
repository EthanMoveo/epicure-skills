import React from 'react';
import GenericCard from '../SharedComponents/GenericCard/GenericCard.component';
import styles from './chefRestaurantCard.module.scss';

interface ChefRestaurantCardProps {
  title: string;
  picture: string;
}

const ChefRestaurantCard: React.FC<ChefRestaurantCardProps> = ({ title, picture }) => {
  return (
    <GenericCard picture={picture}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </GenericCard>
  );
};

export default ChefRestaurantCard;
