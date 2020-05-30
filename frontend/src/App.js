import React, { Component } from 'react';
import './App.css';
import { Button, Badge } from 'reactstrap';
import LandingScreen from './views/landing/landing';
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom'
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import TopNavbar from './components/navbar/navbar';
import ContactScreen from './views/contact/contact';
import AboutScreen from './views/about/about';
import BuyTickets from './views/tickets/BuyTickets'

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Router>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route exact path = "/" component = {LandingScreen}/>
          <Route exact path = "/home" component = {LandingScreen}/>
          <Route exact path = "/contact" component = {ContactScreen}/>
          <Route exact path = "/about" component = {AboutScreen}/>
          <Route exact path = "/tickets" component = {BuyTickets}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
