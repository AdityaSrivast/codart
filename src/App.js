import React, { Component } from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import Main from './components/main';
import Port from './components/port';
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
      // <HashRouter>
      <HashRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/port" component={Port} exact/>
          {/* <Route path="/login" component={Login} exact />
          <Route path="/" component={Dashboard}/> */}
        </Switch>
        </HashRouter>
      // </HashRouter>
    );
  }
}

export default App;
