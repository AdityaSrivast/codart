import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Questions from './Question/index';
import Leaderboard from './leaderboard/leaderboard';
import io from 'socket.io-client'
import urls from '../urls';
import Cookie from '../cookie';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            socket:null,
            component: 'leaderboard'
        }
    }
    componentWillMount(){
        var token = Cookie.getCookie('token');
        var socket=io(urls.BASE_URL)
        this.setState({socket})
        console.log(token)
        socket.emit('connectMe',token)
    }

    updateDashboardMount = (component) => {
        this.setState({component: component});
    }

    render() {
        let {component} = this.state;
        let toMount;
        if(!component) {
            toMount = <Leaderboard onUpdateDashboardMount={this.updateDashboardMount} socket={this.state.socket} />;
        }
        switch (component) {
            case 'leaderboard':
                toMount = <Leaderboard onUpdateDashboardMount={this.updateDashboardMount} socket={this.state.socket} />;
                break;
            case 'questions':
                toMount = <Questions onUpdateDashboardMount={this.updateDashboardMount} socket={this.state.socket} />
                break;
            default:
                this.props.updateToMount(component);
                break;
        }

        return (
        <div>
            {toMount}
        </div>
        );
    }
}

export default App;