import React from 'react';
import styles from './genericCard.module.scss';

interface GenericCardProps {
  picture: string;
  title: string;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const GenericCard: React.FC<GenericCardProps> = ({
  picture,
  title,
  className = "",
  contentClassName = "",
  children,
}) => {
  const combinedClassNames = `${styles.cardContainer} ${className}`.trim();
  const combinedContentClassNames = `${styles.cardContent} ${contentClassName}`.trim(); 
  return (
    <div className={combinedClassNames}>
      <div className={styles.imageContainer}>
        <img src={picture} alt={title} />
      </div>
      <div className={combinedContentClassNames}> 
        <h3 className={styles.cardTitle}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default GenericCard;
