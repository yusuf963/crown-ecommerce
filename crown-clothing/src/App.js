import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css'

import HomePage from './component/home-page';
import ShopPage from './component/shop/shop.component.jsx'
import Header from './component/header/hearder-cmponent'



function App(){
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
