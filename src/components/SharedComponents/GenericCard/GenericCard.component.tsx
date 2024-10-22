import React from 'react';
import styles from './genericCard.module.scss';

interface GenericCardProps {
  picture: string;
  children?: React.ReactNode;
}

const GenericCard: React.FC<GenericCardProps> = ({
  picture,
  children,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={picture} alt='pic' />
      </div>
        {children}
    </div>
  );
};

export default GenericCard;
