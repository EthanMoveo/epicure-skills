import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import GenericIcon from './../GenericIcon/GenericIcon';
import styles from './sectionIcons.module.scss';

interface SectionIconsProps {
  icons: { icon: string; text: string }[];
}

const SectionIcons: React.FC<SectionIconsProps> = ({ icons }) => {
  return (
    <section className={styles.iconSection}>
      <SectionTitle>THE MEANING OF OUR ICONS:</SectionTitle>
      <div className={styles.iconContainer}>
        {icons.map((item, index) => (
          <GenericIcon key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default SectionIcons;
