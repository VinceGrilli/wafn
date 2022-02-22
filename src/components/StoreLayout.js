import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ProductsProvider from './ProductsProvider';
import CartProvider from './CartProvider';
import * as css from './StoreLayout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './Carousel';
import Footer from './Footer';

const StoreLayout = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <Header cart />

      <MyCarousel />
      <main className={css.main}>{children}</main>
      <Footer />
    </CartProvider>
  </ProductsProvider>
);

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreLayout;
