import React, {Component} from 'react';
import {Grid, Button, Snackbar} from '@material-ui/core';
import Submission from './submission';
// import QuestionList from './questionList';

import axios from 'axios';

import OpenTestcase from './results/opentestcase';
import Output from './results/output';
import Cookie from '../../cookie';
import urls from '../../urls';
import './style.css';

const BASE_URL = urls.BASE_URL;

class Questions extends Component {

    constructor() {
        super();
        this.state = {
            problem: [],
            language: '',
            file: null,
            openSnackbar: false,
            msgSnackbar: '',
            typeSnackbar: '',
            vertical: 'top',
            horizontal: 'center',
            results: []
        }
        this.getQues();
    }

    handleChange = name => event => {
        if(name==='file' && event.target.files) {
            let file = this.file.files[0];
            this.setState({file: file});
        }
        else {
            this.setState({[name]: event.target.value});
        }
    }

    onClose = () => {
        this.setState({openSnackbar: false});
    }

    getQues = () => {
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Content-Type' : 'application/json','Authorization':'Bearer '+cookie},
        };
        axios.get(`${BASE_URL}/team/problem`, config)
        .then (resp => {
            let problem = resp.data;
            console.log(problem);
            this.setState({problem});
        })
        .catch(err=> {
            if(err.status===404) {
                console.log('its 404');
            }
            console.log(err);
        });
    }

    submit = () => {
        let {language, file} = this.state;
        let form = new FormData();
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Authorization':'Bearer '+cookie},
        };
        let extensions = ['c','cpp','java','py'], extension;
        form.append('lang', language);
        form.append('file', file);
        console.log(file);

        //checking empty field
        if(language!=='' && file && file.name) {
            extension = file.name.split('.');

            //checking extensions
            if(extension && extension.length>0) {
                extension = extension[extension.length-1];
                if(extensions.includes(extension)) {
                    axios.post(`${BASE_URL}/submit`, form, config)
                    .then(resp=> {
                        let results = resp.data;
                        console.log(results);
                        this.setState({results});
                    })
                    .catch(err=> {
                        if(err.response && err.response.data) {
                            let error = err.response;
                            if(error.status===400) {
                                this.setState({openSnackbar: true, 
                                    msgSnackbar: error.data.err, typeSnackbar: 'error'});
                            }

                            else if(error.status===500) {
                                this.setState({openSnackbar: true, 
                                    msgSnackbar: 'Could not submit. Please check your network and try again',
                                    typeSnackbar: 'error'});
                            }

                            else {
                                this.setState({openSnackbar: true, 
                                    msgSnackbar: error.data.err? error.data.err: 'Could not submit. Please check your network and try again',
                                    typeSnackbar: 'error'});
                            }
                            // console.log(error);
                            
                        }
                    });
                }

                // displaying error for extensions
                else {
                    this.setState({openSnackbar: true, msgSnackbar: 'File format not acceptable.', 
                    typeSnackbar: 'error'});
                }
            }
        }
        else {
            if(language==='') {
                this.setState({openSnackbar: true, msgSnackbar: 'Please select a language', 
                typeSnackbar: 'error'});
            }

            else if(!file) {
                this.setState({openSnackbar: true, msgSnackbar: 'Please upload a file', 
                typeSnackbar: 'error'});
            }
        }
    }

    render() {
        let {problem, openSnackbar, msgSnackbar, typeSnackbar, vertical, horizontal, results} = this.state;
        let {done, points, result} = results;
        console.log(done, points, result);
        return(
            <div className="question-section">
                <p className="heading">Question View</p>
                <Grid container spacing={24}>
                    <Grid item lg={8} xs={7}>
                        <div>
                            <p className="heading" style={{margin: '0', marginBottom:'1rem'}}>{problem.title}</p>
                            <div className="question-container">
                                <div className="question">
                                    <pre>{(problem && problem.descr)?problem.descr: ''}</pre>
                                    {/* {(problem && problem.descr)?problem.descr: ''} */}
                                </div>
                                <div className="question-form">
                                    <div>
                                        <p>Language</p>
                                        <select onChange={this.handleChange('language')}>
                                            <option value="">Select</option>
                                            <option value="c">C</option>
                                            <option value="cpp">C++</option>
                                            <option value="java8">Java 8</option>
                                            <option value="python2">Python 2</option>
                                            <option value="python3">Python 3</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p>Upload File</p>
                                        {/* <input type="file" ref="file" id="file" /> */}
                                        <input
                                            // accept="image/*"
                                            type="file"
                                            ref={c => {
                                            this.file = c;
                                            }}
                                            multiple="false"
                                            onChange={this.handleChange('file')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={5}>
                        <Submission/>
                        {/* <QuestionList/> */}
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item lg={8} xs={7}>
                        <OpenTestcase/><br/>
                        <Button className="submit-btn"
                                    onClick={this.submit}
                        >Submit</Button>
                    </Grid>
                </Grid>
                <Snackbar
			  	  anchorOrigin={{ vertical, horizontal }}
		          open={openSnackbar}
                  message={msgSnackbar}
                  className={typeSnackbar==='success'? 
                  'success-snackbar': 'error-snackbar'}
		          autoHideDuration={10000}
		          onClose={this.onClose}
		        />
            </div>
        )
    }
}

export default Questions;
