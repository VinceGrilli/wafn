import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Cart from './Cart';

const NavItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: var(--hiq-color-primary);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--hiq-color-primary);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    margin-bottom: 1rem;
  }
`;
const NavbarLinks = ({ cart }) => (
  <>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/contact">Contact</NavItem>
    {cart && <Cart />}
  </>
);

NavbarLinks.propTypes = { cart: PropTypes.bool.isRequired };

export default NavbarLinks;
