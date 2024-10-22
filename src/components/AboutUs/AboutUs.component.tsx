import React from 'react';

import styles from './aboutUs.module.scss';
import logoEpicure from './../../assets/icons/about-logo-epicure.svg';
import appleIcon from './../../assets/icons/apple-icon.svg';
import googleIcon from './../../assets/icons/google-icon.svg';


const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.description}>
        <div>
          <div className={styles.title}>About Us</div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
          eu ipsum. Cras porta malesuada eros, eget blandit
          turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
          <br />
          dignissim a vestibulum.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
          eu ipsum. Cras porta malesuada eros.
          <br /> <br />
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
