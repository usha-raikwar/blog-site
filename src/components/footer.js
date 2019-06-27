import React from 'react';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__item footer__copyright">
      © {new Date().getFullYear()}, ThoughtDoor
    </div>
  </footer>
);

export default Footer;
