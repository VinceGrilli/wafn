import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/md';
import icon from '../../pictures/wafn-logo-sm.jpg';
import Cart from './Cart';
import StyledHeader from './StyledHeader';

function Header({ cart }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <img src={icon} alt="WAFN" />
        </Link>
        <button type="button" className="burger" onClick={handleToggle}>
          <MdMenu style={{ color: '#fff', width: '2.7rem', height: '3rem' }} />
        </button>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <li>
            <Link onClick={() => closeMenu()} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={() => closeMenu()} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => closeMenu()} to="/contact">
              Contact
            </Link>
          </li>
          <li>{cart && <Cart />}</li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

Header.propTypes = { cart: PropTypes.bool.isRequired };

export default Header;
