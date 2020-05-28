import React, { Component } from 'react';
import './App.css';
import { Button, Badge } from 'reactstrap';
import LandingScreen from './views/landing/landing';
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom'
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import TopNavbar from './components/navbar/navbar';
// import TrackrNavbar  from './components/navbar/navbar';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Router>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route path = "/home" component = {LandingScreen}/>
          <Route path = "/" component = {LandingScreen}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
