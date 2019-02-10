import React from 'react';
import {NavLink} from 'react-router-dom';


import { Button } from '@material-ui/core';

import Cookie from '../cookie';
import Codart from '../../images/codart.png';

function logout(){
    Cookie.deleteCookie('token');
    window.location='/'
}
const Navbar = (props) => {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={Codart} alt="Codart" />
            </NavLink>
            <div className="navbar-btn-container">
                <div className="nav-btn-container" style={{marginRight: '10px'}}>
                    {!Cookie.getCookie('token') ? 
                    <NavLink to="/">
                        <Button>Home</Button>
                    </NavLink>:props.leaderboard?
                    <NavLink to="/questions">
                        <Button>Question View</Button>
                    </NavLink>:
                    <NavLink to="/leaderboard">
                        <Button>Leaderboard</Button>
                    </NavLink>
                    }
                    
                </div>
                <div className="nav-btn-container">
                    {!Cookie.getCookie('token') ? 
                    <NavLink to="/login">
                        <Button>Login</Button>
                    </NavLink>:
                    <a onClick={logout}>
                        <Button>Logout</Button>
                    </a> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
