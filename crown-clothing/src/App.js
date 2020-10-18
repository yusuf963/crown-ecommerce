import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css'

import HomePage from './component/home-page';
import ShopPage from './component/shop/shop.component.jsx'
import SignInAndSignUpPage from './component/sign-in-up/sign-in-up-component';
import Header from './component/header/hearder-cmponent';
import {auth} from './component/firebase/firebase.utils'



class App extends React.Component{
  constructor(){
    super();
    this.state ={
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

componentDidMount(){
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
    this.setState({ currentUser: user });
    console.log(user)
  })
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={ShopPage}/> 
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}
 

export default App;
