import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './chefSection.module.scss';
import useIsDesktop from '../../hooks/useIsDesktop.hook';
import ChefRestaurantCard from '../ChefRestaurantCard/ChefRestaurantCard.component';
import GenericSwiper from '../SharedComponents/GenericSwiper/GenericSwiper.component';
import { ChefRestaurants } from '../../constants/interfaces/ChefRestaurants';
import { DeviceBreakPoint } from '../../constants/types/DeviceBreakPoint';
import { Skeleton } from '@mui/material';

interface ChefSectionProps {
  title: string;
}

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;


const ChefSection: React.FC<ChefSectionProps> = ({ title }) => {
  const isDesktop = useIsDesktop(DeviceBreakPoint.DESKTOP); 
  const { chef, isLoading, chefRestaurants } = useSelector((state: RootState) => state.chefWeek);

  
  return (
    <section className={styles.sectionChef}>
      <div className={styles.title}>{title}</div>
      {chef ? 
            <div className={styles.chefDescription}>
            <img src={`${STRAPI_BASE_URL}${chef?.image}`} className={styles.image} />
            <p className={styles.text}>{chef?.description}</p>
          </div>
          :
          (<div className={styles.chefDescription}>
          <Skeleton width={400} height={500} className={styles.image} />
          <Skeleton className={styles.text} />
          </div>)
      }
      <div className={styles.chefRestaurants}>
        {chef ? <div className={styles.subtitle}>{`${chef?.name}'s Restaurants`}</div> : <Skeleton width={400} height={50} /> }
        <div className={styles.restaurantsContainer}>
        { isDesktop ?
        (<div className={styles.restaurantsGrid}>
          { chef ? chefRestaurants.map((chefRestaurants, index) => (
            <ChefRestaurantCard
              key={index}
              id={chefRestaurants.id}
              name={chefRestaurants.name}
              image={chefRestaurants.image}
            /> 
          )) : <Skeleton width={500} height={500} />}
        </div>) 
        :
         (<GenericSwiper CardComponent={ChefRestaurantCard} items={chefRestaurants} />)
        }
        </div>
      </div>

    </section>
  );
};

export default ChefSection;
