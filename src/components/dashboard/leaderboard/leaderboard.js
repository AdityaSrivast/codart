import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import TopCard from './topCard';

import './leaderboard.css';

class Leaderboard extends Component {
    render() {
        return(
            <div className="leaderboard-section">
                <Grid container>
                    <Grid item lg={9} xs={8}>
                    <p className="heading">Leaderboard</p>
                    <TopCard/>
                    <div className="leaderboard-list">
                        <table cellspacing="0" cellpadding="0">
                            <tr>
                                <td>{"{rank}"}</td>
                                <td>{"{teamname}"}</td>
                                <td>{"{points}"}</td>
                                <td>{"{questions}"}</td>
                            </tr>
                        </table>
                    </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Leaderboard;
