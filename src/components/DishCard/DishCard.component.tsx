import React from 'react';

import GenericCard from './../SharedComponents/GenericCard/GenericCard.component';
import styles from './dishCard.module.scss';
import line from './../../assets/icons/line.svg';
import infoIcon from './../../assets/icons/info.svg';
import { Dish } from '../../constants/interfaces/Dish';
import CustomToolTip from '../CustomToolTip/CustomToolTip.component';

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;


const DishCard: React.FC<Dish> = ({ image, name, tags, ingredients, price }) => {
  const getIconTooltip = () => {
    const content = tags
      .map((tag) => tag.name)
      .join(' & ');

    return (
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '5px' }}>Helpful Tip</h1>
        <p style={{ textAlign: 'center', fontSize: '16px' }}>
          {tags.length < 2 ? "This icon indicates the following:" : "These icons indicate the following:"}<br />
          {content}
        </p>
      </div>
    );
  };

  return (
    <GenericCard picture={`${STRAPI_BASE_URL}${image}`}>
      <div className={styles.dishCardContent}>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.iconText}>
          <div className={styles.toolTipIconDiv}>
            <div className={styles.iconToolTip}>
              {tags.length !== 0 ? tags.map((tag) => (
                <img
                  key={tag.name}
                  src={`${STRAPI_BASE_URL}${tag.url}`}
                  alt={`${tag.name} icon`}
                  className={styles.icon}
                />
              )) : <div style={{height: '40px'}}></div>}
            </div>
            {tags.length !== 0 ?    
              <CustomToolTip title={getIconTooltip()} arrow>
              <img src={infoIcon} alt="info" className={styles.toolTip} />
            </CustomToolTip> : <div style={{height: '26px'}}></div> }

          </div>
          <p className={styles.description}>{ingredients}</p>
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
