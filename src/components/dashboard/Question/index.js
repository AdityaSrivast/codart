import React, {Component} from 'react';
import {Grid, Button, Snackbar,Dialog,DialogActions,
    DialogContent,DialogContentText,DialogTitle, CircularProgress} from '@material-ui/core';
import Submission from './submission';
// import QuestionList from './questionList';

import axios from 'axios';
import {NavLink} from 'react-router-dom';
import OpenTestcase from './results/opentestcase';
import Output from './results/output';
import Navbar from '../../common/navbar';
import Cookie from '../../cookie';
import urls from '../../urls';
import './style.css';
import { Socket } from 'dgram';

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
            results: [],
            questionView:true
        }
        this.getQues();
    }

    componentDidMount(){
        var getQues=this.getQues
        this.props.socket.on('updateQues',function(){
            console.log('socket','updating question....')
            getQues()
        })
    }

    // componentWillUnmount(){
    //     this.props.socket.removeEventListener('updateQues')
    // }

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
            this.setState({problem,questionView:true});
        })
        .catch(err=> {
            if(err.response.status===404) {
                console.log('its 404');
                this.setState({questionView:false,queue:err.response.data.QueueIndex})
            }
            console.log(err);
        });
    }
    skip=()=>{
        this.setState({ diagOpen: false })
        let cookie = Cookie.getCookie('token');
        let config = {
            headers : {'Authorization':'Bearer '+cookie},
        };
        axios.post(`${BASE_URL}/team/problem/skip`, null, config)
            .then(async resp=> {
                await this.getQues()
                this.setState({openSnackbar: true, 
                    msgSnackbar: 'Question Skipped!', typeSnackbar: 'success'});
            })
            .catch(err=> {
                if(err.response.status===400){
                    this.setState({openSnackbar: true, 
                        msgSnackbar: err.response.data.err, typeSnackbar: 'error'});
                }
            })
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
        form.append('socketId',this.props.socket.id)
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
        console.log(this.state.questionView)
        if(this.state.questionView)
        return(
            <div>
                {/* <Navbar/> */}
                <div className="question-section">
                    <div className="question-section-top">
                        <p className="heading">Question View</p>
                        {/* <div className="nav-btn-container">
                            <NavLink to="/leaderboard">
                                <Button>Go to Leaderboard</Button>
                            </NavLink>
                        </div> */}
                    </div>
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
                            <Submission socket={this.props.socket}/>
                            {/* <QuestionList/> */}
                        </Grid>
                    </Grid>
                {/* </Grid> */}
                <Grid container spacing={24}>
                    <Grid item lg={8} xs={7}>
                        {result && result[0] && <OpenTestcase openCase={result[0]} />}<br/>
                        <Grid container spacing={24}>
                            <Grid item lg={6} xs={6}>
                                <Button className="submit-btn"
                                            onClick={this.submit}
                                >Submit</Button>
                            </Grid>
                            <Grid item lg={5} xs={5}>
                                <Button className="submit-btn"
                                            onClick={()=>{
                                                if(done) this.getQues()
                                                else this.setState({ diagOpen: true })}
                                            }
                                >{done?'Continue':'Skip'}</Button>
                            </Grid>
                        </Grid>
                        {/* <Grid item lg={4} xs={5}>
                            {result && result[1] && <Output results={result} />}
                        </Grid> */}
                    </Grid>
                    <Grid item lg={4} xs={5}>
                        {result && result[1] && <Output results={result} />}
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
                <Dialog
                    open={this.state.diagOpen}
                    onClose={()=>this.setState({ diagOpen: false })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{"You are about to skip a question"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Note that every team is allowed to skip 3 questions only. Once you reached your count, you won't be able to skip any quesion.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>this.setState({ diagOpen: false })} color="primary">
                        Exit
                        </Button>
                        <Button onClick={this.skip} color="primary" autoFocus>
                        Confirm 
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            </div>
        )
        else return(
            <div>
                {/* <Navbar/> */}
                <div className="question-section">
                    <p className="heading">Question View</p>
                    <Grid container spacing={24}>
                        <Grid item lg={12} xs={12}>
                        <h2 className="heading">It's to time throw the Dart! 🎯</h2>
                        Nothing is assigned to you right now. Throw the dart to get the question.<br/>
                        Your waiting queue# is: <b>{this.state.queue}</b>
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
            </div>       
        )
    }
}

export default Questions;
