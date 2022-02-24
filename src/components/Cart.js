import React, { useContext } from 'react';
import { MdOutlineShoppingCart as MDCart } from 'react-icons/md';
import styled from 'styled-components';
import { CartContext } from './CartProvider';
import Checkout from './Checkout';
import CartItem from './CartItem';

const CartWrapperStyles = styled.div`
  border-left: 1px solid #ddd;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  padding: 2rem;
  background-color: white;
  width: 50vw;
  z-index: 10;
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: flex-start;
  div {
    justify-content: space-between;
  }
  span {
    display: block;
    margin-top: 1rem;
  }
`;

const Cart = () => {
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <>
      <button type="button" onClick={() => toggle()}>
        Cart &nbsp; <MDCart />
      </button>
      <CartWrapperStyles style={{ display: mode ? 'initial' : 'none' }}>
        <div>
          <h1>Cart</h1>
          <button type="button" onClick={() => toggle()}>
            →
          </button>
        </div>

        {count > 0 &&
          cart.map(([price, quantity]) => (
            <CartItem key={price.id} price={price} quantity={quantity} />
          ))}
        {count === 0 && <span>No items in cart.</span>}
        {count > 0 && <Checkout />}
      </CartWrapperStyles>
    </>
  );
};

export default Cart;
