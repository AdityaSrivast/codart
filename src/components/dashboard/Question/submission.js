import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import Cookie from '../../cookie';
import urls from '../../urls';

const BASE_URL = urls.BASE_URL;

class Submission extends Component {
    constructor() {
        super();
        this.state = {
            attempts: []
        }
        this.getSubmissions();
    }
    
    componentDidMount(){
        this.props.socket.on('updateSub',function(){
            this.getSubmissions()
        })
    }

    componentWillUnmount(){
        this.props.socket.removeEventListener('updateSub')
    }

    getSubmissions = () => {
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Content-Type' : 'application/json','Authorization':'Bearer '+cookie},
        };
        axios.get(`${BASE_URL}/team/attempts`, config)
        .then (resp => {
            let attempts = resp.data;
            console.log(attempts);
            this.setState({attempts});
        })
        .catch(err=> {
            console.log(err);
        });
    }

    render() {
        // console.log(this.props)
        let {attempts} = this.state;
        let showAttempts = [], attempt, cases, successAttempts;
        for(let i=0;i<attempts.length;i++) {
            attempt = attempts[i];
            cases = attempt.cases;
            successAttempts=cases.length;
            for (let j=0;j<cases.length;j++) {
                if(cases[j]===false) {
                    successAttempts--;
                }
            }
            showAttempts.push(
                <tr>
                    <td>{attempt.score}</td>
                    <td>{`${successAttempts}/${cases.length}`}</td>
                    <td>{moment(attempt.time, moment.ISO_8601).fromNow()}</td>
                    <td><a href={`${BASE_URL}/${attempt.download}?token=${Cookie.getCookie('token')}`}>Download</a></td>
                </tr>
            )
        }

        return (
            <div className="submission">
                {/* <tr> */}
                <p>My Submissions</p>
                <table>
                <tr>
                    <th>Score</th>
                    <th>Testcases passed</th>
                    <th>Time</th>
                    <th>Downloads</th>
                </tr>
                {showAttempts && showAttempts.length>0? 
                    showAttempts: <td style={{color: 'red', marginTop: '1rem'}} colSpan={4}>No submissions yet</td>}
                </table>
            </div>
        );
    }
}

export default Submission;
