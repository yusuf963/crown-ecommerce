import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './component/home-page';
import ShopPage from './component/shop/shop.component.jsx';
import SignInAndSignUpPage from './component/sign-in-up/sign-in-up-component';
import Header from './component/header/hearder-cmponent';
import {auth, createUserProfileDocument} from './component/firebase/firebase.utils';
import{setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'



class App extends React.Component{
  unsubscribeFromAuth = null;

componentDidMount(){
  const {setCurrentUser} = this.props;
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
  if (userAuth){
    const userRef = await createUserProfileDocument(userAuth);
   
    userRef.onSnapshot(onSnapshot =>{
     setCurrentUser({
          id : onSnapshot.id,
          ...onSnapshot.data()
        });
    });
  }
  
  setCurrentUser(userAuth)
  });
 
}
    componentWillUnmount(){
    this.unsubscribeFromAuth();
}
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={ShopPage}/> 
          <Route exact path='/signin' render={()=> this.props.currentUser? (<Redirect to ='/'/>): (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
};
 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
 })
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
