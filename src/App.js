import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Main from './components/main';
// import Landing from './components/landing/landing';
// import Login from './components/login/login';
// import Dashboard from './components/dashboard/';
// import Questions from './components/dashboard/Question';
// import Leaderboard from './components/dashboard/leaderboard/leaderboard';
import './style.css';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          {/* <Route path="/login" component={Login} exact />
          <Route path="/" component={Dashboard}/> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
