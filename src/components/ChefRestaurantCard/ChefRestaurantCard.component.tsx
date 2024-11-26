import React from 'react';
import GenericCard from '../SharedComponents/GenericCard/GenericCard.component';
import styles from './chefRestaurantCard.module.scss';

interface ChefRestaurantCardProps {
  id: number;
  name: string;
  image: string;
}
const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

const ChefRestaurantCard: React.FC<ChefRestaurantCardProps> = ({name, image }) => {
  return (
    <GenericCard picture={`${STRAPI_BASE_URL}${image}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{name}</div>
      </div>
    </GenericCard>
  );
};

export default ChefRestaurantCard;
