import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle'; 
import styles from './genericSection.module.scss';

interface GenericSectionProps {
  title: string; 
  swiperComponent: React.ReactNode; 
  showText?: boolean;
  text?: string; 
  icon?: string;
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, swiperComponent, showText = false, text, icon }) => {
  return (
    <section className={styles.genericSection}>
      <SectionTitle>{title}</SectionTitle> 
      {swiperComponent}
      <div className={styles.optionalText}> 
       {showText && text && <div className={styles.additionalText}>{text}</div>}
       {showText && icon && <img src={icon} />}
      </div>
    </section>
  );
};

export default GenericSection;
