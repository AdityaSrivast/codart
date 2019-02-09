import React, {Component} from 'react';
import {TextField, Button, CircularProgress, Snackbar } from '@material-ui/core';
// import Navbar from '../common/navbar';
import axios from 'axios';

import Cookie from '../cookie';
import urls from '../urls';
import './login.css';

const BASE_URL = urls.BASE_URL;

class Login extends Component {
    state = {
        teamname: '',
        password: '',
        openSnackbar: false,
        msgSnackbar: '',
        typeSnackbar: 'error',
        vertical: 'top',
        horizontal: 'center',
        loading: false
    }

    postLogin = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const { teamname, password } = this.state;
        let data = {team: teamname, passwd: password};
        console.log(data);
        axios.post(`${BASE_URL}/login`, data)
        .then(resp=> {
            if(resp.data) {
                data = resp.data;
                let token = data.token;
                // console.log(data,token);
                Cookie.setCookie('token', token);
                this.setState({openSnackbar: true,
                    msgSnackbar: `Welcome team ${teamname}. Logging in...`,
                    typeSnackbar: 'success',
                    loading: false
                });
                setTimeout(() => {
					// this.props.history.push('/leaderboard');
                    // },
                    this.props.updateToMount('leaderboard')
                    },
                3000);
            }
            else {
                this.setState({openSnackbar: true,
                    msgSnackbar: `The teamname or password is invalid. Please try again`,
                    typeSnackbar: 'error',
                    loading: false,
                    teamname: '',
                    password: ''
                });
            }
        })
        .catch(err=> {
            console.log(err);
            this.setState({openSnackbar: true,
                msgSnackbar: `The teamname or password is invalid.  Please try again`,
                typeSnackbar: 'error',
                loading: false,
                teamname: '',
                password: ''
            });
        });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    onClose = () => {
        this.setState({openSnackbar: false, loading: false});
    }

    componentDidMount() {
        document.title="Codart | Login"
    }

    render() {
        let {vertical, horizontal, openSnackbar, 
            msgSnackbar, typeSnackbar, loading} = this.state;
        return (
            <div>
                {/* <Navbar/> */}
                <div className="login">
                    <form className="login-form" onSubmit={this.postLogin}>
                        <div>
                            <TextField
                                label="teamname"
                                className=""
                                value={this.state.teamname}
                                onChange={this.handleChange('teamname')}
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
                        <div className="btn-container">
                            <Button disabled={loading} 
                            type="submit"
                            >{loading? <CircularProgress 
                                style={{color: '#fff'}} />:
                                <span>Login</span>}</Button>
                        </div>
                    </form>
                </div>
                <Snackbar
			  	  anchorOrigin={{ vertical, horizontal }}
		          open={openSnackbar}
                  message={msgSnackbar}
                  className={typeSnackbar==='success'? 
                  'success-snackbar': 'error-snackbar'}
		          autoHideDuration={3000}
		          onClose={this.onClose}
		        />
            </div>
        )
    }
}

export default Login;
