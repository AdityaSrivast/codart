import React, {Component} from 'react';
import {TextField, Button } from '@material-ui/core';
import Navbar from '../common/navbar';
import './login.css';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    postLogin = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    componentDidMount() {
        document.title="Codart-Login"
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="login">
                    <form className="login-form" onSubmit={this.postLogin}>
                        <div>
                            <TextField
                                label="email address"
                                type="email"
                                className=""
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                variant="outlined"
                            /><br/>
                            <TextField
                                label="Password"
                                type="password"
                                className=""
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                margin="normal"
                                variant="outlined"
                            /><br/>
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;