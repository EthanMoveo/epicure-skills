import React from 'react';

import './footer.modules.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li className="footer__link-item">
          <a href="/contact" className="footer__link">Contact Us</a>
        </li>
        <li className="footer__link-item">
          <a href="/terms" className="footer__link">Term of Use</a>
        </li>
        <li className="footer__link-item">
          <a href="/privacy" className="footer__link">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
