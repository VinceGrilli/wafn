import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductsProvider from './ProductsProvider';
import CartProvider from './CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';

const MainStyles = styled.main`
  margin: 2rem auto;
  max-width: 960px;
`;

const StoreLayout = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <Navbar cart />
      <MyCarousel />
      <MainStyles> {children}</MainStyles>
      <Footer />
    </CartProvider>
  </ProductsProvider>
);

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreLayout;
