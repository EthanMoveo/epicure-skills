import React from 'react';

import './footer.modules.scss';

const Footer: React.FC = () => {
  const menuItems = [
    'Contact Us',
    'Term of Use',
    'Privacy Policy',
  ];

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
