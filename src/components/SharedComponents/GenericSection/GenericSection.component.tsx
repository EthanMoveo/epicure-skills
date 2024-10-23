import React from 'react';
import styles from './genericSection.module.scss';
import GenericSwiper from '../GenericSwiper/GenericSwiper.component';
import moreIcon from './../../../assets/icons/more.svg';

interface GenericSectionProps<T extends { id: number }> { // Ensure T includes id: number
  title: string;
  items: T[];
  CardComponent: React.FC<T>;
  text?: string;
}

const GenericSection = <T extends { id: number }>({ title, items, CardComponent, text }: GenericSectionProps<T>) => {
  return (
    <section className={styles.genericSection}>
      <h1 className={styles.title}>{title}</h1>
      <GenericSwiper items={items} CardComponent={CardComponent} />
      {text && (
        <div className={styles.optionalText}>
          <div className={styles.additionalText}>{text}</div>
          <img src={moreIcon} alt="More Icon" />
        </div>
      )}
    </section>
  );
};

export default GenericSection;

