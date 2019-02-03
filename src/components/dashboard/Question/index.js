import React, {Component} from 'react';
import {Grid, Button} from '@material-ui/core';
import Submission from './submission';
import QuestionList from './questionList';

import './style.css';

class Questions extends Component {

    shouldComponentUpdate() {
        console.log(this.refs);
    }

    render() {
        return(
            <div className="question-section">
                <p className="heading">Question View</p>
                <Grid container spacing={24}>
                    <Grid item lg={8} xs={8}>
                        <div>
                            <p className="heading" style={{margin: '0', marginBottom:'1rem'}}>{"{question}"}</p>
                            <div className="question-container">
                                <div className="question">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus incidunt, enim, dolorum saepe tenetur repellat impedit 
                                    esse deleniti id fuga consequatur ex optio maxime repudiandae cupiditate sapiente ipsam mollitia quos!
                                </div>
                                <div className="question-form">
                                    <div>
                                        <p>Language</p>
                                        <select>
                                            <option value="c">C</option>
                                            <option value="cpp">C++</option>
                                            <option value="Python">Python</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Upload File</p>
                                        <input type="file" ref="file" id="file" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <Button className="submit-btn">Submit</Button>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={4}>
                        <Submission/>
                        <QuestionList/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Questions;
