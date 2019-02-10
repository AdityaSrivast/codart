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
                        <p style={{textAlign: 'center'}}>
                        The name says it all. <b>Codart = Code + Dart</b>. This unconventional combination provides for an amusing experience, and it is the USP of this very unique coding contest.<br/><br/>
                        The contest has two rounds, with the first round being an online test (on Hackerearth) for all teams, who have to submit their codes for as many problems as possible within the given time. 
                        The ten teams which have accumulated the highest score during round 1 are invited for the second and final round.<br/><br/>
                        Here, the rules are different, but the game is very simple. The problem statement which a team receives is based on where their dart lands on the dartboard, 
                        as the problem’s difficulty is purely dependent on specific regions marked on the board. For example, hitting bullseye would result in the team getting one of the easiest problems in the competition, 
                        and vice-versa. Solving the problems results in gaining points. The objective is to gain maximum points in the duration of the event.<br/><br/>
                        Remember, there are some irresistible prizes on the line here. So, practice your throws while you scan through your favourite algorithms and libraries, and brace yourselves for the most fun coding event of the year, 
                        <b>Codart</b>.<br/><br/>
                        Codart is an event where fun and coding amalgamate to keep the excitement levels high.
                        For the second round we have a very special dartboard for you which will determine the difficulty level of your questions. <br/> <br/>
                        <b>Test your aim to race to your swifter victory!!!</b>
                        </p>
                    </div>
                    {/* <NavLink to="/login">
                        <Button>Login</Button>
                    </NavLink> */}
                    <div id="rules" className="landing-item">
                        <h1>RULES</h1>
                        <ol>
                            <li>Internet access is <b>prohibited</b>.</li>
                            <li>The section of the dartboard that is hit will determine the difficulty (easy, hard, medium) of the question allotted.</li>
                            <li>If you miss the dartboard once, a second chance will be given.</li>
                            <li>On the second miss, a <b>hard</b> question will be allotted.</li>
                            <li><b>Three</b> skips at an interval of <b>20 minutes</b> each are permitted.</li>
                        </ol>
                    </div>
                    <div id="faq" className="landing-item">
                        <h1>FAQ</h1>
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>How many questions will be asked?</p>
                                <img src={expanded==='panel1'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                For initiating the contest one question will be given to all the participants. 
                                After solving given question participants can take up a new question by throwing a dart.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>What is the marking scheme?</p>
                                <img src={expanded==='panel2'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                100 points will be awarded for solving any question.
                                </p>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className="collapsible-container">
                            <ExpansionPanelSummary>
                                <p>Does a question of higher difficulty level have higher weightage?</p>
                                <img src={expanded==='panel3'? MinusOutlined:AddOutlined} alt="icon" />
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>
                                No, questions of all difficulty level have equal weightage. 
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
