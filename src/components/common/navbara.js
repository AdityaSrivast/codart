import React, {Component} from 'react';
// import {div} from 'react-router-dom';


import { Button } from '@material-ui/core';

import Cookie from '../cookie';
import Codart from '../../images/codart.png';

class Navbara extends Component {

    handleHref = name => event => {
        this.props.updateToMount(name);
    }

    render() {
        return (
            <div className="navbar">
                <div to="/">
                    <img src={Codart} alt="Codart" />
                </div>
                <div className="navbar-btn-container">
                    <div className="nav-btn-container" style={{marginRight: '10px'}}>
                        <div onClick={this.handleHref('landinga')}>
                            <Button>Home</Button>
                        </div>
                    </div>
                    <div className="nav-btn-container">
                        {/* mount dashboard; by default leaderboard will be displayed on dashboard */}
                        <div onClick={this.handleHref('dashboard')}>
                            <Button>Leaderboard</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbara;
