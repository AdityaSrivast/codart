import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import Testcase from './testcase';

class Results extends Component {
    render() {
        return(
            <div className="results">
                <p>Test Case 1</p>
                <div className="result-container">
                    <div className="">
                        <p>Input</p>
                        <p></p>
                    </div>
                    <div className="">
                        <p>Expected Output</p>
                        <p></p>
                    </div>
                    <div className="">
                        <p>Your Output</p>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;
