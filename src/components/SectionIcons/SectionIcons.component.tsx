import React from 'react';
import GenericIcon from '../SharedComponents/GenericIcon/GenericIcon.component';
import styles from './sectionIcons.module.scss';

interface SectionIconsProps {
  icons: { icon: string; text: string }[];
}

const SectionIcons: React.FC<SectionIconsProps> = ({ icons }) => {
  return (
    <section className={styles.iconSection}>
      <div className={styles.title}>THE MEANING OF OUR ICONS:</div>
      <div className={styles.iconContainer}>
        {icons.map((item, index) => (
          <GenericIcon key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default SectionIcons;
