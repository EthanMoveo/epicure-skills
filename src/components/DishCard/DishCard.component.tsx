import React from 'react';
import GenericCard from './../SharedComponents/GenericCard/GenericCard.component';
import styles from './dishCard.module.scss';
import line from './../../assets/icons/line.svg';
import { Dish } from '../../constants/interfaces/Dish';



const DishCard: React.FC<Dish> = ({
  picture,
  title,
  icon,
  description,
  price,
}) => {
  return (
    <GenericCard picture={picture}>
      <div className={styles.dishCardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.iconText}>
            <img src={icon} alt="dish icon" className={styles.icon} />
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
