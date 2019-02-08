import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/landing/landing';
import Login from './components/login/login';
import Dashboard from './components/dashboard/';
// import Questions from './components/dashboard/Question';
// import Leaderboard from './components/dashboard/leaderboard/leaderboard';
import './style.css';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={Login} exact />
          {/* <Route path="/leaderboard" component={Leaderboard} exact /> */}
          <Route path="/" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
