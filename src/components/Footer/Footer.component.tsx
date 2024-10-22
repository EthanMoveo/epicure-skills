import React from 'react';

import { menuItems } from '../../constants/data/menuItems';
import './footer.modules.scss';

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <ul className="footer__links">
        {menuItems.map((item, index) => (
          <li key={index} className="footer__link-item">
            <span className="footer__link">{item}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
