import React from 'react';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import './profile.css';

const Profile = props => {
    // console.log(props);
    return (
        <div className="profile-section">
            <h1>Profile</h1>
            <div className="team-details">
                <h2>{props.teamname}</h2>
                <h4>{!!props.members && props.members[0]?props.members[0].firstname:''}</h4>
                <h4>{!!props.members && props.members[1]?props.members[1].firstname:''}</h4>
            </div>
            <div>
                <h2>Points Scored</h2>
                <h3>{props.score}</h3>
            </div>
            <div>
                <h2>Questions Solved</h2>
                <h3>{`${props.solvedQues}/${!!props.totalQues?props.totalQues:''}`}</h3>
            </div>
            <div>
                <h2>Position</h2>
                <h3>{props.rank}</h3>
            </div>
            <div className="submit-btn-container">
                <NavLink to="/questions">
                    <Button>Question View ></Button>
                </NavLink>
            </div>
        </div>
    )
}

export default Profile;
