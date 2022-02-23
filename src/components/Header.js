import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icon from '../../pictures/wafn-logo-sm.png';
import Cart from './Cart';

const StyledHeader = styled.header`
  background: black;
  border-bottom: 1px solid black;
  nav {
    border-top: 8px solid black;
    align-items: center;
    margin: 0 auto 0.5rem;
    max-width: 900px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
  }
  a {
    color: #ddd;
    margin-right: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
  }
  a.nav-link:visited {
    text-decoration: none;
  }
`;
function Header({ cart }) {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <img src={icon} alt="WAFN" />
        </Link>
        <div>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {cart && <Cart />}
        </div>
      </nav>
    </StyledHeader>
  );
}

Header.propTypes = { cart: PropTypes.bool.isRequired };

export default Header;
