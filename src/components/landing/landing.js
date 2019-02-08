import React, { Component } from 'react';
// import Navbar from '../common/navbar/navbar';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
// import Footer from '../common/footer/footer';

import AddOutlined from '../../images/add-outlined.png';
import MinusOutlined from '../../images/minus-outlined.png';

import Navbar from '../common/navbar';
import './landing.css';

class Landing extends Component {
    state = {
        expanded: '',
    };
    
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "ACM-VIT | Codart";
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const { expanded } = this.state;
        return(
            <div className="landing-section">
                <Navbar/>
                {/* <div className="featured-content">

                </div> */}
                <div className="landing-content">
                    <div id="about" className="landing-item">
                        <h1 id="about" >ABOUT</h1>
                        <p>
                        The name says it all. <b>Codart = Code + Dart</b>. This unconventional combination provides for an amusing experience, and it is the USP of this very unique coding contest.<br/><br/>
The contest has two rounds, with the first round being an online test (on Hackerearth) for all teams, who have to submit their codes for as many problems as possible within the given time. The ten teams which have accumulated the highest score during round 1 are invited for the second and final round.<br/><br/>
Here, the rules are different, but the game is very simple. The problem statement which a team receives is based on where their dart lands on the dartboard, as the problem’s difficulty is purely dependent on specific regions marked on the board. For example, hitting bullseye would result in the team getting one of the easiest problems in the competition, and vice-versa. Solving the problems results in gaining points. The objective is to gain maximum points in the duration of the event.<br/><br/>
Remember, there are some irresistible prizes on the line here. So, practice your throws while you scan through your favourite algorithms and libraries, and brace yourselves for the most fun coding event of the year, <b>Codart</b>.
                        </p>
                    </div>
                    {/* <NavLink to="/login">
                        <Button>Login</Button>
                    </NavLink> */}
                    <div id="rules" className="landing-item">
                        <h1>RULES</h1>
                        <h2>Round 1</h2>
                        <ol>
                            <li>Participants can compete in teams of two or as individuals.</li>
                            <li>Switching between teams or leaving a team is <b>not permitted</b>.</li>
                            <li>The test will be conducted online on <b>Hackerearth</b>. The portal’s link will be made available to all participants via e-mail.</li>
                        </ol>
                        <h2>Round 2</h2>
                        <ol>
                            <li>Round 2 will be offline and will be held on the <b>10th of February</b>.</li>
                            <li>Teams will get to throw a dart, which would give them the resulting question to solve, depending on the region where the dart landed.</li>
                            <li>There will be situations where participants find the question to be very time consuming or just too difficult. In these cases, 
                                teams are allowed to skip the question and throw again, but they receive a penalty for the same.</li>
                        </ol>
                        <p><b>The top 3 teams (point-wise) will be declared winners.</b></p>
                    </div>
                    <div id="faq" className="landing-item">
                        <h1>FAQ</h1>
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>How many rounds are there?</p>
                                <img src={expanded==='panel1'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                The event is split into 2 rounds. The best performing teams in round 1 are eligible to participate in round 2.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>Is it online or offline?</p>
                                <img src={expanded==='panel2'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                The first round is online and will be held on the 3rd of February. The second round will be held on the 10th of February at Venue.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>How do I score more points in both rounds?</p>
                                <img src={expanded==='panel3'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                In round 1, teams have to submit codes for given problems, and their score from each problem depends on how many test cases the code can run successfully. The more problems you solve completely, the higher your score. In round 2, just like the problem difficulty, the reward for each problem also depends on where the dart hits the dartboard.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>How will I be notified if I’m selected for the second round?</p>
                                <img src={expanded==='panel4'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                The Round 1 portal will have a leader-board visible to all participants, hence if you are in the top 10 you would know you’re qualified for the second round. 
                                Also, eligible teams will be notified via text and e-mail, including the wild cards too 
                                <span role="img" aria-label="emoji">😉</span>.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>Whom to contact for doubts related to portal ?</p>
                                <img src={expanded==='panel5'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                Vatsal Kandoi<br/>
                                Contact Number: <span style={{color: 'red'}}>+91-9830135260</span>
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        )
    }
}

export default Landing;
