import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Landing from './components/landing/landing';
// import Login from './components/login/login';
import Leaderboard from './components/dashboard/leaderboard/leaderboard';
import './style.css';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Leaderboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
