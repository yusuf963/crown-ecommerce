import { combineReducers }  from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reudcer';
import cartReducer from './cart/cart.reducer';
import directoryReducder from './directory/directory.reducer'



const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducder
});


export default persistReducer(persistConfig, rootReducer);


