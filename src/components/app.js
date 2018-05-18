import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Draw from './draw';
import Guess from './guess';
import Nav from './nav';


import {logo} from '../logo.svg';
import './app.css';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1><Link to="/">Connect the Dots...</Link></h1>
        </header>
        <main>
          <Route exact path="/" component={Home} />  
          <Route exact path="/draw" component={Draw} />
          <Route exact path="/guess" component={Guess} />
          <Route exact path="/nav" component={Nav} />
        </main>
      </div>
    </Router>
  );
}

