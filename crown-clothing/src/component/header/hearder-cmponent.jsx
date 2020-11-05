import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {auth} from '../firebase/firebase.utils';
import CartIcon from '../cart-icom/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header-component.scss';
import { setCurrentUser } from '../../redux/user/user.actions';

const Header =({ currentUser, hidden })=>(
    <div  className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to= '/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className ='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
                :
                <Link className= 'option' to ='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>

        {  hidden ? null: <CartDropDown/> }
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);