import React from 'react';
import {Grid} from '@material-ui/core';
import './topcard.css';

const TopCard = props => {
    return(
        <Grid item md={3} xs={3}>
            <div className="topcard">
                <p className="topcard-rank">{props.rank}</p>
                <div>
                    <p>{props.teamname}</p>
                </div>
                <div>
                    <p>{props.score}</p>
                    <p>Points Scored</p>
                </div>
                <div>
                    <p>{`${props.solvedQues}/${props.totalQues}`}</p>
                    <p>Questions Solved</p>
                </div>
            </div>
        </Grid>
    );
}

export default TopCard;
