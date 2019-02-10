import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Questions from './Question/index';
import Leaderboard from './leaderboard/leaderboard';
import io from 'socket.io-client'
import urls from '../urls';
import Cookie from '../cookie';

class App extends Component {
    constructor(props){
        super(props)
        this.state={socket:null}
    }
    componentWillMount(){
        var token = Cookie.getCookie('token');
        var socket=io(urls.BASE_URL)
        this.setState({socket})
        console.log(token)
        socket.emit('connectMe',token)
    }
    render() {
        return (
        <BrowserRouter>
            <Switch>
            <Route path="/leaderboard" exact>
                <Leaderboard socket={this.state.socket}/>
            </Route>
            <Route path="/questions" exact >
                <Questions socket={this.state.socket}/>
            </Route>
            </Switch>
        </BrowserRouter>
        );
    }
}

export default App;