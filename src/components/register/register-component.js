import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import style from './register-styles.js';
import GlobalStyles from '../../styles';

export default class Register extends Component{
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
                    <div>
                        <TextField 
                            fullWidth={true}
                            hintText="Enter Password"
                            floatingLabelText="Retype Password"
                            type="password"
                        />
                    </div>  
         
                    <div style={{marginBottom: '3vh', marginTop: '3vh'}}>                 
                        <RaisedButton
                            fullWidth={true}
                            label="Register"
                            primary={true}
                           />                                
                    </div> 

                    <div>                        
                        <RaisedButton
                            fullWidth={true}
                            label="Register with Facebook"              
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}