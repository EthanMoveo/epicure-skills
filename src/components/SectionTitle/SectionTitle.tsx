import React from 'react';
import styles from './section-title.module.scss';  

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SectionTitle;
