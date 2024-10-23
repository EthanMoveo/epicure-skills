import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './swiperSection.module.scss';

interface GenericSwiperProps<T> {
  items: T[];
  CardComponent: React.FC<T>;
}

const GenericSwiper = <T extends { id: number }>({ items, CardComponent }: GenericSwiperProps<T>) => {
  return (
    <section className={styles.swiperSection}>
      <Swiper
        slidesPerView={1.3}
        centeredSlides={false}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
        }}
        className={styles.swiperContainer}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <CardComponent {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GenericSwiper;
