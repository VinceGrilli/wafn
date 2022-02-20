import React from 'react';

import StoreLayout from '../components/StoreLayout';
import Products from '../components/Products';
import SEO from '../components/SEO';
import CategoryList from '../components/CategoryList';

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CategoryList />
    <Products />
  </StoreLayout>
);

export default IndexPage;
