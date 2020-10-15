import React from 'react';
import HomePage from './component/home-page';
import {Switch, Route, Link} from 'react-router-dom';
import ShopPage from './component/shop/shop.component.jsx'


function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
