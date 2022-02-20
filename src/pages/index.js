import React from 'react';

import StoreLayout from '../components/StoreLayout';
import SEO from '../components/SEO';
import CategoryList from '../components/CategoryList';

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`wafn`, `offical`, `home`]} />
    <CategoryList />
  </StoreLayout>
);

export default IndexPage;
