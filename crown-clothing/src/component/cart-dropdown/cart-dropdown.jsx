import React from 'react';
import {connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.scss';



const CartDropDown =({cartItems})=> (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))
          : 
          <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton>GO TO CHERCKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);