import React from 'react';
import GenericCard from './../SharedComponents/GenericCard/GenericCard.component';
import styles from './dishCard.module.scss';
import line from './../../assets/icons/line.svg';
import spicyIcon from './../../assets/icons/spicy-icon.svg';
import vegetarianIcon from './../../assets/icons/vegetarian-icon.svg';
import veganIcon from './../../assets/icons/vegan-icon.svg';
import infoIcon from './../../assets/icons/info.svg';
import { Dish } from '../../constants/interfaces/Dish';
import Tooltip from '@mui/material/Tooltip';

// Définir un type pour les tags valides
type Tag = 'spicy' | 'vegetarian' | 'vegan';

const tagToIcon: Record<Tag, string> = {
  spicy: spicyIcon,
  vegetarian: vegetarianIcon,
  vegan: veganIcon,
};

const tagToLabel: Record<Tag, string> = {
  spicy: 'Spicy',
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
};

const DishCard: React.FC<Dish> = ({
  image,
  name,
  tags,
  ingredients,
  price,
}) => {
  const description = ingredients.join(', ');

  const getIconTooltip = () => {
    const content = tags
      .filter((tag): tag is Tag => tag in tagToLabel)
      .map((tag) => tagToLabel[tag])
      .join(' & ');
  
    return (
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '5px'}}>Helpful Tip</h1>
        <p style={{textAlign: 'center', fontSize: '16px'}}>This icon indicates the following:<br />{content}</p>
      </div>
    );
  };
  

  return (
    <GenericCard picture={image}>
      <div className={styles.dishCardContent}>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.iconText}>
          <div className={styles.iconToolTip}>
            {tags
              .filter((tag): tag is Tag => tag in tagToIcon)
              .map((tag) => (
                <img
                  key={tag}
                  src={tagToIcon[tag]}
                  alt={`${tag} icon`}
                  className={styles.icon}
                />
              ))}
          </div>
            <Tooltip title={getIconTooltip()} >
              <img src={infoIcon} alt="info" className={styles.toolTip} />
            </Tooltip>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.priceContainer}>
          <img className={styles.lines} src={line} alt="line" />
          <span className={styles.price}>₪{price}</span>
          <img className={styles.lines} src={line} alt="line" />
        </div>
      </div>
    </GenericCard>
  );
};

export default DishCard;
