import React from 'react';
import styles from './genericIcon.module.scss'; // Assure-toi de créer ce fichier pour les styles

interface GenericIconProps {
  icon: string;
  text: string; 
}

const GenericIcon: React.FC<GenericIconProps> = ({ icon, text }) => {
  return (
    <div className={styles.genericIcon}>
      <img className={styles.icon} src={icon}></img>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default GenericIcon;
