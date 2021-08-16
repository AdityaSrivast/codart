import React, {Component} from 'react';
import {TextField, Button, CircularProgress} from '@material-ui/core';
import './login/login.css';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class Port extends Component {

    state = {
        loading: false,
        port: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    setPort = (e) => {
        e.preventDefault();
        let {port} = this.state;
        ipcRenderer.send('send-port', port);
    }

    render() {
        let {loading} = this.state;
        return (
            <div>
                <div className="login">
                    <form className="login-form" onSubmit={this.setPort}>
                        <div>
                            <TextField
                                label="Enter Port"
                                className=""
                                value={this.state.port}
                                onChange={this.handleChange('port')}
                                margin="normal"
                                variant="outlined"
                            /><br/>
                        </div>
                        <div className="btn-container">
                            <Button disabled={loading} 
                            type="submit"
                            >{loading? <CircularProgress 
                                style={{color: '#fff'}} />:
                                <span>Submit</span>}</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Port;
