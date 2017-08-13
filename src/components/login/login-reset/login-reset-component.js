import React, { Component } from 'react';
import GlobalStyle from '../../../styles';
import style from '../login-styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginReset extends Component {
    render(){
        return(
            <div style={GlobalStyle.container}>
                <Paper zDepth={3} style={style.form}>
                    <div style={{height: '90%'}}>
                        <div>
                            <TextField
                                fullWidth={true}
                                hintText="example@hotmail.com"
                                floatingLabelText="Emailng Address"
                                type="email"
                            />
                        </div>
                        <div style={{ marginTop: '10%'}}>
                            <RaisedButton 
                                fullWidth={true}
                                label="Reset Password"
                                primary={true}
                            />
                        </div>
                    </div>
                </Paper>                
            </div>
        );
    }
}