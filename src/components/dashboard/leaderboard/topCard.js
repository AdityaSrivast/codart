import React from 'react';
import './topcard.css';

const TopCard = () => {
    return(
        <div className="topcard">
            <p className="topcard-rank">1</p>
            <div>
                <p>{"{'Team Name'}"}</p>
            </div>
            <div>
                <p>{"{'points'}"}</p>
                <p>Points Scored</p>
            </div>
            <div>
                <p>{"{'questions-solved'}"}</p>
                <p>Questions Solved</p>
            </div>
        </div>
    );
}

export default TopCard;
