import React from 'react';

import styled from 'styled-components';
import StoreLayout from '../components/StoreLayout';
import SEO from '../components/SEO';
import CategoryList from '../components/CategoryList';

const H2Styles = styled.h2`
  text-align: center;
  font-weight: 600;
`;

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`wafn`, `offical`, `home`]} />
    <H2Styles>WAFN OFFICIAL ONLINE STORE</H2Styles>
    <CategoryList />
  </StoreLayout>
);

export default IndexPage;
