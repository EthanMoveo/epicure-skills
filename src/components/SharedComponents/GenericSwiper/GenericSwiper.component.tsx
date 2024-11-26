import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Skeleton } from '@mui/material';
import styles from './swiperSection.module.scss';

interface GenericSwiperProps<T> {
  items: T[];
  CardComponent: React.FC<T>;
}

const GenericSwiper = <T extends { id: number }>({
  items,
  CardComponent,
}: GenericSwiperProps<T>) => {
  const isLoadingRestaurant = useSelector((state: RootState) => state.restaurantSwiper.isLoading);
  const isLoadingDishes = useSelector((state: RootState) => state.dishSwiper.isLoading);
  const isLoadingChef = useSelector((state: RootState) => state.chefWeek.isLoading);
  const errorRestaurant = useSelector((state: RootState) => state.restaurantSwiper.error);
  const errorDishes = useSelector((state: RootState) => state.dishSwiper.error);
  const errorChef = useSelector((state: RootState) => state.chefWeek.error);
  const error = errorRestaurant || errorDishes || errorChef;

  const isLoading = isLoadingRestaurant || isLoadingDishes || isLoadingChef;

  return (
    <section className={styles.swiperSection}>
      <Swiper
        slidesPerView={1.3}
        centeredSlides={false}
        breakpoints={{
          500: {
            slidesPerView: 2.4,
            spaceBetween: 24,

          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={styles.swiperContainer}
      >
        {isLoading || error
          ? Array.from({ length: 3 }).map((_, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Skeleton variant="rectangular" className={styles.skeletonCards} style={{ margin: '10px' }} />
              </SwiperSlide>
            ))
          : items.map((item) => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <CardComponent {...item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default GenericSwiper;
