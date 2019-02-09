import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import {KeyboardArrowRight} from '@material-ui/icons';

import './profile.css';

class Profile extends Component {

    handleHref = name => event => {
        this.props.onUpdateDashboardMount(name);
    }
    
    render() {
        let {members, teamname, score, rank, solvedQues, totalQues} = this.props;
        return (
            <div className="profile-section">
                <h1>Profile</h1>
                <div className="team-details">
                    <h2>{teamname}</h2>
                    <h4>{!!members && members[0]?members[0].firstname:''}</h4>
                    <h4>{!!members && members[1]?members[1].firstname:''}</h4>
                </div>
                <div>
                    <h2>Points Scored</h2>
                    <h3>{score}</h3>
                </div>
                <div>
                    <h2>Questions Solved</h2>
                    <h3>{`${(solvedQues|| solvedQues===0)? solvedQues:''}/${(totalQues || totalQues===0)? totalQues:''}`}</h3>
                </div>
                <div>
                    <h2>Position</h2>
                    <h3>{rank}</h3>
                </div>
                <div className="submit-btn-container">
                    <div onClick={this.handleHref('questions')}>
                        <Button>Question View <KeyboardArrowRight className="hide-arrow" /></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
