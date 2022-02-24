import React from 'react';
import PropTypes from 'prop-types';

import '../hiq.css';
import Navbar from '../Navbar';
import StripeProductsProvider from './StripeProductsProvider';

const Layout = ({ children }) => (
  <StripeProductsProvider>
    <Navbar cart={false} />
    <main>{children}</main>
  </StripeProductsProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
