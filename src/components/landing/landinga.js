import React, { Component } from 'react';
import Navbar from '../common/navbara';

import Navbar from '../common/navbar';
import FAQ from './faq';
import './landing.css';

class Landinga extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "ACM-VIT | Codart";
    }

    render() {
        
        return(
            <div className="landing-section">
                {/* <Navbar/> */}
                {/* <div className="featured-content">

                </div> */}
                <div className="landing-content">
                    <div id="about" className="landing-item">
                        <h1 id="about" >ABOUT</h1>
                        <p>
                        The name says it all. <b>Codart = Code + Dart</b>. This unconventional combination provides for an amusing experience, 
                        and it is the USP of this very unique coding contest.<br/><br/>
                        The contest has two rounds, with the first round being an online test (on Hackerearth) for all teams, 
                        who have to submit their codes for as many problems as possible within the given time. 
                        The ten teams which have accumulated the highest score during round 1 are invited for the second and final round.<br/><br/>
                        Here, the rules are different, but the game is very simple. The problem statement which a team receives is based on where their 
                        dart lands on the dartboard, as the problem’s difficulty is purely dependent on specific regions marked on the board. For example, 
                        hitting bullseye would result in the team getting one of the easiest problems in the competition, and vice-versa. 
                        Solving the problems results in gaining points. The objective is to gain maximum points in the duration of the event.<br/><br/>
                        Remember, there are some irresistible prizes on the line here. So, practice your throws while you scan through your favourite algorithms and 
                        libraries, and brace yourselves for the most fun coding event of the year, <b>Codart</b>.
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
                    {/* FAQS for round 2 */}
                    <FAQ />
                </div>
            </div>
        )
    }
}

export default Landinga;
