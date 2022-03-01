import React, { useContext } from 'react';
import { MdOutlineShoppingCart as MDCart } from 'react-icons/md';
import styled from 'styled-components';
import { CartContext } from './CartProvider';
import Checkout from './Checkout';
import CartItem from './CartItem';

const CartWrapperStyles = styled.div`
  border-left: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  padding: 2rem;
  background-color: white;
  width: 70%;
  z-index: 10;
  display: block;
  right: ${(props) => (props.toggle ? '-100%' : '0')};
  display: ${(props) => (props.mode ? 'block' : 'none')};
  transition: all 0.3s ease-in;
  div {
    justify-content: space-between;
  }
`;

const Cart = () => {
  const { cart, count, mode, toggle } = useContext(CartContext);
  return (
    <>
      <button type="button" onClick={() => toggle()}>
        Cart &nbsp; <MDCart />
      </button>
      <CartWrapperStyles mode={mode}>
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
        {count === 0 && (
          <span style={{ display: 'block', marginTop: '1rem' }}>
            No items in cart.
          </span>
        )}
        {count > 0 && <Checkout />}
      </CartWrapperStyles>
    </>
  );
};

export default Cart;
