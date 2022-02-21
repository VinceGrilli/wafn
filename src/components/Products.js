import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductsContext } from './ProductsProvider';
import ProductThumbnail from './ProductThumbnail';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto 500px;
`;

const Items = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();
  console.log(products);
  return (
    <ProductStyles>
      {products.map((product) => (
        <ProductThumbnail key={product.id} product={product} />
      ))}
    </ProductStyles>
  );
};

export default Items;
