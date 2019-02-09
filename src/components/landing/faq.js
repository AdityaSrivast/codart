import React, {Component} from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Button} from '@material-ui/core';
// import {NavLink} from 'react-router-dom';


import AddOutlined from '../../images/add-outlined.png';
import MinusOutlined from '../../images/minus-outlined.png';

import './landing.css';

class FAQ extends Component {
    state = {
        expanded: '',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
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
        );
    }
}

export default FAQ;
