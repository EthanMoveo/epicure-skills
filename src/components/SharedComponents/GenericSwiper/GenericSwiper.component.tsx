// src/components/SharedComponents/GenericSwiper/GenericSwiper.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Skeleton } from '@mui/material';
import styles from './swiperSection.module.scss';

interface GenericSwiperProps<T> {
  items: T[];
  CardComponent: React.FC<T>;
}

const GenericSwiper = <T extends { _id: string }>({
  items,
  CardComponent,
}: GenericSwiperProps<T>) => {
  const isLoadingRestaurant = useSelector((state: RootState) => state.restaurants.isLoading);
  const isLoadingDishes = useSelector((state: RootState) => state.dishes.isLoading);
  const isLoadingChef = useSelector((state: RootState) => state.chefOfTheWeek.isLoading);
  const errorRestaurant  = useSelector((state: RootState) => state.restaurants.error);
  const errorDishes  = useSelector((state: RootState) => state.dishes.error);
  const errorChef  = useSelector((state: RootState) => state.chefOfTheWeek.error);
  const error  = errorRestaurant || errorDishes || errorChef;

  const isLoading = isLoadingRestaurant || isLoadingDishes || isLoadingChef;

  return (
    <section className={styles.swiperSection}>
      <Swiper
        slidesPerView={1.3}
        centeredSlides={false}
        breakpoints={{
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className={styles.swiperContainer}
      >
        {isLoading || error
          ? Array.from({ length: 3 }).map((_, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Skeleton variant="rectangular" className={styles.skeletonCards} style={{ margin: '10px' }} />
              </SwiperSlide>
            ))
          : 
          items.map((item) => (
              <SwiperSlide key={item._id} className={styles.swiperSlide}>
                <CardComponent {...item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default GenericSwiper;
