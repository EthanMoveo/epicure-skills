import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import styles from './swiperSection.module.scss'; 

interface GenericSwiperProps<T> {
  items: T[]; 
  renderCard: (item: T, index: number) => React.ReactNode; 
}

const GenericSwiper = <T,>({ items, renderCard }: GenericSwiperProps<T>) => {
  return (
    <section className={styles.swiperSection}>
      <Swiper
        // spaceBetween={20}
        slidesPerView={1.3}
        centeredSlides={false}
        breakpoints={{
          1440: {
            slidesPerView: 3,

          },
        }}
        className={styles.swiperContainer}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {renderCard(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GenericSwiper;
