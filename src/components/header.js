import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/grey_version.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_logo">
      <h1>
       <img src={logo} alt='Logo' width="52" height="52"/>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav className="menu">
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Upright|Lora|Prata&display=swap" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
