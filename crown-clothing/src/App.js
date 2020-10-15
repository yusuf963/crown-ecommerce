import React from 'react';
import HomePage from './component/home-page';
import {Switch, Route} from 'react-router-dom';


const HatPage =()=>(
  <div>
    <h1>Hats page</h1>
  </div>
)
 
const HatPageId =()=>(
 <div>
   <h3>Hat id is{HatPageId.value}</h3>
 </div>
)

function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatPage}/> 
        <Route exact path='/hats/:hatid' component={HatPageId}/>
      </Switch>
    </div>
  );
}

export default App;
