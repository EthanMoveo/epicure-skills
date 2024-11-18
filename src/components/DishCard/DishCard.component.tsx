import React from 'react';
import GenericCard from './../SharedComponents/GenericCard/GenericCard.component';
import styles from './dishCard.module.scss';
import line from './../../assets/icons/line.svg';
import spicyIcon from './../../assets/icons/spicy-icon.svg';
import vegetarianIcon from './../../assets/icons/vegetarian-icon.svg';
import veganIcon from './../../assets/icons/vegan-icon.svg';
import { Dish } from '../../constants/interfaces/Dish';
import Tooltip from '@mui/material/Tooltip';




const DishCard: React.FC<Dish> = ({
  image,
  name,
  tags,
  ingredients,
  price,
}) => {

  let icon;
  if (tags.includes('spicy')) {
    icon = spicyIcon;
  } else if (tags.includes('vegetarian')) {
    icon = vegetarianIcon;
  } else if (tags.includes('vegan')) {
    icon = veganIcon;
  }
  const description = ingredients.join(', ');

  const getIconTooltip = () => {
    if (tags.includes('spicy')) return 'Spicy';
    if (tags.includes('vegetarian')) return 'Vegetarian';
    if (tags.includes('vegan')) return 'Vegan';
    return '';
  };

  return (
    <GenericCard picture={image}>
      <div className={styles.dishCardContent}>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.iconText}>
          <Tooltip title={getIconTooltip()}>
            <img src={icon} alt="dish icon" className={styles.icon} />
            </Tooltip>
            <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.priceContainer}>
          <img className={styles.lines} src={line} alt='line' />
          <span className={styles.price}>₪{price}</span>
          <img className={styles.lines} src={line} alt='line' />
        </div>
      </div>
    </GenericCard>
  );
};

export default DishCard;
