import React, {Component} from 'react';
import Landing from './landing/landing';
import Login from './login/login';
import Dashboard from './dashboard/';
import Navbar from './common/navbar';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            component: 'landing'
        }
    }

    updateToMount = (component) => {
        this.setState({component: component});
    }

    render() {
        let {component} = this.state;
        // process.env.TOKEN = 'asd';
        // console.log(process.env.TOKEN);
        let toMount;
        switch (component) {
            case 'landing':
                toMount = <Landing updateToMount={this.updateToMount}/>;
                break;
            case 'login':
                toMount = <Login updateToMount={this.updateToMount}/>
                break;
            case 'dashboard':
                toMount = <Dashboard updateToMount={this.updateToMount}/>
                break;
            default:
                toMount = <Landing updateToMount={this.updateToMount}/>;
                break;
        }
        return (
            <div>
                <Navbar updateToMount={this.updateToMount} />
                {toMount}
            </div>
        )
    }
}

export default Main;
