import React from 'react';
import { useSelector } from 'react-redux';
import {  RootState } from '../../store/store';

import styles from './aboutUs.module.scss';
import logoEpicure from './../../assets/icons/about-logo-epicure.svg';
import appleIcon from './../../assets/icons/apple-icon.svg';
import googleIcon from './../../assets/icons/google-icon.svg';


const AboutUs: React.FC = () => {
  const { sectionTitle, content } = useSelector((state: RootState) => state.aboutUs);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.description}>
        <div>
          <div className={styles.title}>{sectionTitle}</div>
            <p>
          {content}
          </p>
        </div>
        <div className={styles.downloadsDesktop}>
            <img src={googleIcon} />
            <img src={appleIcon} />
        </div>
      </div>

      <div className={styles.logoDesktop}>
       <img src={logoEpicure} />
      </div>
    </div>
  );
};

export default AboutUs;
