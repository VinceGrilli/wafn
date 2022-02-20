import React from 'react';
import PropTypes from 'prop-types';
import StoreLayout from '../components/StoreLayout';
import ProductPage from '../components/ProductPage';

const ItemTemplate = ({ pageContext: { id } }) => (
  <StoreLayout>
    <ProductPage productId={id} />
  </StoreLayout>
);

ItemTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ItemTemplate;
