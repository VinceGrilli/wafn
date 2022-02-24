import React from 'react';

import styled from 'styled-components';
import StoreLayout from '../components/StoreLayout';
import SEO from '../components/SEO';
import CategoryList from '../components/CategoryList';

const H1Styles = styled.h1`
  text-align: center;
  font-weight: 600;
`;

const H4Styles = styled.h4`
  text-align: center;
  font-weight: 600;
  margin: 1rem auto;
`;

const IndexPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`wafn`, `offical`, `home`]} />
    <H1Styles>WAFN OFFICIAL ONLINE STORE</H1Styles>
    <H4Styles>What a F&#$ing Nightmare</H4Styles>
    <CategoryList />
  </StoreLayout>
);

export default IndexPage;
