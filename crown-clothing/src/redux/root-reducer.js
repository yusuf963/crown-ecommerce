import {combineReducers}  from 'redux';
import userReucer from './user/user.reudcer';

export default combineReducers({
    user: userReucer
})


