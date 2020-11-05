import { createSelector } from 'reselect';

const selectCart = state => state.cart;
 
export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);

export const selectCartHidden =  createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    CartItems =>
    CartItems.reduce(
        (accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity,
        0
    )
)