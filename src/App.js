import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Landing from './components/landing/landing';
import Login from './components/login/login';
import './index.css';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
