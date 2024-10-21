import React from 'react';

import SectionTitle from './../SectionTitle/SectionTitle'; 
import styles from './genericSection.module.scss';
import moreIcon from './../../assets/icons/more.svg'

interface GenericSectionProps {
  title: string; 
  swiperComponent: React.ReactNode; 
  text?: string; 
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, swiperComponent, text }) => {
  return (
    <section className={styles.genericSection}>
      <SectionTitle>{title}</SectionTitle> 
      {swiperComponent}
      <div className={styles.optionalText}> 
       {text && <div className={styles.additionalText}>{text}</div>}
       {text && <img src={moreIcon} />}
      </div>
    </section>
  );
};

export default GenericSection;
