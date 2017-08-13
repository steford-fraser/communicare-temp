import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import style from './login-styles.js';
import GlobalStyles from '../../styles';

export default class Login extends Component{    
    render(){      
        return(
            <div style={GlobalStyles.container}>
                <Paper style={style.form} zDepth={2}>
                    
                    <div style={GlobalStyles.posRight}>
                        <a style={{color: 'blue'}}>Trouble Logging in?</a>
                    </div>
                  
                    <div>
                        <TextField
                            fullWidth={true}
                            hintText="example@hotmail.com"
                            floatingLabelText="Email Address"
                            type="email"
                        />
                    </div>
                    <div>
                        <TextField 
                            fullWidth={true}
                            hintText="Enter Password"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>   
                    {/* <br />   */}       
                    <div style={style.btnContainer}>
                        <span style={{width: '45%'}}>
                            <RaisedButton
                                fullWidth={true}
                                label="Login"
                                primary={true}
                            />                        
                        </span>
                        <span style={{width: '45%'}}>
                            <RaisedButton
                                fullWidth={true}
                                label="Register"
                                secondary={true}
                            />
                        </span>
                    </div>   
                    {/* <br />  */}        
                    <div>                        
                        <RaisedButton
                            fullWidth={true}
                            label="Login with Facebook"              
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}