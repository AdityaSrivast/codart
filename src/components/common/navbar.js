import React from 'react';
import {NavLink} from 'react-router-dom';


import { Button } from '@material-ui/core';

import Cookie from '../cookie';
import Codart from '../../images/codart.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={Codart} alt="Codart" />
            </NavLink>
            <div className="navbar-btn-container">
                <div className="nav-btn-container" style={{marginRight: '10px'}}>
                    <a href="/">
                        <Button>Home</Button>
                    </a>
                </div>
                <div className="nav-btn-container">
                    {!Cookie.getCookie('token') ? 
                    <a href="/login">
                        <Button>Login</Button>
                    </a>:
                    <NavLink to="/leaderboard">
                        <Button>Leaderboard</Button>
                    </NavLink> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
