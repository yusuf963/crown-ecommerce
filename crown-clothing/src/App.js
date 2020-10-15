import React from 'react';
import HomePage from './component/home-page';
import {Switch, Route, Link} from 'react-router-dom';


const HatPage =()=>(
  <div>
    <Link to= '/'>Click here to see hats</Link>
    <h1>Hats page</h1>
  </div>
)
 
const HatPageId =(props)=>(
 <div>
    <button onClick={()=>props.history.push('/')}>Click here to got back to the home stor</button>
   <h3>Hat id is {props.match.params.hatid}</h3>
 </div>
)


function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatPage}/> 
      </Switch>
    </div>
  );
}

export default App;
