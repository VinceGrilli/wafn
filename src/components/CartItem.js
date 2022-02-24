import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { CartContext } from './CartProvider';

const CartStyles = styled.div`
  display: flex;
  margin: 1rem 0;
  position: relative;

  .image {
    margin-right: 1rem;
  }

  .image img {
    width: 100px;
    max-height: 100px;
    object-fit: contain;
  }

  .description {
    flex-basis: 100%;
    color: black;
  }

  .quantity {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
  }

  .remove {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    right: 0;
    top: 0;
  }
`;

const CartItem = ({ price, quantity }) => {
  const { remove } = useContext(CartContext);
  return (
    <CartStyles key={price.id}>
      <Link to={`/buy/${price.product.slug}`} className="image">
        <img
          src={price.image || price.product.images[0]}
          alt={price.product.name}
        />
      </Link>
      <div className="description">
        <button
          type="button"
          className="remove"
          onClick={() => {
            remove(price.id);
          }}
        >
          &times;
        </button>
        <Link to={`/buy/${price.product.slug}`}>
          <div>
            <strong>{price.product.name}</strong>
          </div>
        </Link>
        <div className="quantity">
          <span>
            ${price.unit_amount / 100} &times; {quantity} &nbsp;
          </span>
          <strong>${(price.unit_amount / 100) * quantity}</strong>
        </div>
      </div>
    </CartStyles>
  );
};

CartItem.propTypes = {
  price: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
