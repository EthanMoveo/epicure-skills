import React from 'react';
import styles from './chefSection.module.scss';
import useIsDesktop from '../../hooks/useIsDesktop.hook';

interface ChefSectionProps {
  title: string;
  image: string;
  text: string;
  subtitle: string;
}

const ChefSection: React.FC<ChefSectionProps> = ({ title, image, text, subtitle }) => {
  const isDesktop = useIsDesktop(1440); 
  return (
    <section className={styles.sectionChef}>
      <div className={styles.title}>{title}</div>
      <div className={styles.chefDescription}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.chefRestaurants}>
        <div className={styles.subtitle}>{subtitle}</div>
        { isDesktop ?
        (<h1>YAY</h1>) : (<h1>No</h1>)
        }
      </div>

    </section>
  );
};

export default ChefSection;
