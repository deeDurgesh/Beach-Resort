import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Room from './pages/Room'
import {Route, Link, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/rooms/" component={Room}/>
        <Route exact={true} path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
      
    </div>
  );
}

export default App;
