import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

import axios from 'axios';
import TopCard from './topCard';
import Profile from './profile';

import urls from '../../urls';
import Cookie from '../../cookie';
import './leaderboard.css';
import Navbar from '../../common/navbar';
// import { Cookies } from 'electron';

const BASE_URL = urls.BASE_URL;

class Leaderboard extends Component {

    constructor() {
        super();
        this.state = {
            teams: [],
            profile: [],
            myTeamRank: ''
        }
        this.getLeaderboard();
        this.getProfile();
    }
    componentDidMount(){
        document.title = "Codart | Leaderboard";
        this.props.socket.on('updateLeader',() => {
            this.getLeaderboard();
            this.getProfile();
        })
    }

    // componentWillUnmount(){
    //     this.props.socket.removeEventListener('updateLeader')
    // }

    getProfile = () => {
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Content-Type' : 'application/json','Authorization':'Bearer '+cookie},
        };

        axios.get(`${BASE_URL}/team`, config)
        .then (resp => {
            let profile = resp.data;
            // console.log(profile);
            this.setState({profile});
        })
        .catch(err=> {
            console.log(err);
        });
    }

    getLeaderboard = () => {
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Content-Type' : 'application/json','Authorization':'Bearer '+cookie},
        };
        axios.get(`${BASE_URL}/leaderboard`, config)
        .then (resp => {
            let teams = resp.data.result;
            console.log(teams);
            this.setState({teams, myTeamRank: resp.data.position});
        })
        .catch(err=> {
            console.log(err);
        })
    }

    render() {
        console.log(this.props)
        let {teams, profile, myTeamRank} = this.state;
        let topCard = [], leaderList=[], team;

        if(teams && teams.length>0) {
            for(let i=0;i<teams.length;i++) {
                team = teams[i];
                // console.log(team);
                if(i<3) {
                    topCard.push(
                        <TopCard teamname={team.team} score={team.score}
                            rank={i+1}
                            totalQues={team.totalQues} 
                            solvedQues={team.solvedQues}
                        />
                    );
                }
                else {
                    leaderList.push(
                        <tr style={{backgroundColor:myTeamRank==i+1?'rgba(254, 81, 81, .25)':''}}>
                            <td>{i+1}</td>
                            <td>{team.team}</td>
                            <td>{team.score}</td>
                            <td>{`${team.solvedQues}/${team.totalQues}`}</td>
                        </tr>
                    );
                }
            }
        }

        return(
            <div>
                <Navbar/>
                <div className="leaderboard-section">
                    <Grid container spacing={24}>
                        <Grid item lg={9} xs={8}>
                            <p className="heading">Leaderboard</p>
                            <Grid container spacing={24} className="topcard-grid">
                                {topCard}
                            </Grid>
                            <div className="leaderboard-list">
                                <table cellSpacing="0" cellPadding="0">
                                    {leaderList}
                                </table>
                            </div>
                        </Grid>
                        <Grid item lg={3} xs={4}>
                            <Profile
                             teamname={profile.team} members={profile.members}
                            score={profile.points} solvedQues={profile.solvedQues} 
                            totalQues={profile.totalQues} rank={myTeamRank} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Leaderboard;
