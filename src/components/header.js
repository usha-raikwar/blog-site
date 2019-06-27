import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.jpg';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_logo">
      <h1>
       <img src={logo} alt='Logo' width="42" height="42"/>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav>
      <Link to="/blog">Blog</Link>
    </nav>
    <link href="https://fonts.googleapis.com/css?family=Cormorant+Upright|Lora|Prata&display=swap" rel="stylesheet">
    </link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
