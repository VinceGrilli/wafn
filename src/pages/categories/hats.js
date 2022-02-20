import React, { useContext } from 'react';
import styled from 'styled-components';

import StoreLayout from '../../components/StoreLayout';
import SEO from '../../components/SEO';
import { ProductsContext } from '../../components/ProductsProvider';
import ProductThumbnail from '../../components/ProductThumbnail';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto 500px;
`;

const Hats = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();
  console.log(products);
  return (
    <ProductStyles>
      {products.map((product) =>
        product.metadata.category === 'hats' ? (
          <ProductThumbnail key={product.id} product={product} />
        ) : (
          ''
        )
      )}
    </ProductStyles>
  );
};
const HatsPage = () => (
  <StoreLayout>
    <SEO title="Hats" keywords={[`hats`, `wafn`]} />
    <Hats />
  </StoreLayout>
);

export default HatsPage;
