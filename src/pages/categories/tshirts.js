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

const Tshirts = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();
  console.log(products);
  return (
    <ProductStyles>
      {products.map((product) =>
        product.metadata.category === 'shirts' ? (
          <ProductThumbnail key={product.id} product={product} />
        ) : (
          ''
        )
      )}
    </ProductStyles>
  );
};
const TshirtsPage = () => (
  <StoreLayout>
    <SEO title="tshirts" keywords={[`tshirts`, `wafn`]} />
    <Tshirts />
  </StoreLayout>
);

export default TshirtsPage;
