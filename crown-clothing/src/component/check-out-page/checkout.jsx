import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import './checkout.style.scss';
import FormInput from '../form-input/form-input';


const CheckoutPage=({ cartItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Discription</span>
            </div>

            <div className='header-block'>
                <span>Quanitty</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                cartItem.name
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);