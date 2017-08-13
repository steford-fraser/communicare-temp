import React, { Component } from 'react';

import GlobalStyles from '../../../styles';
import style from './preview-styles';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

export default class Preview extends Component {
    render(){
        return(
            <div style={GlobalStyles.container}>
                <Paper style={style.cardConatiner}>
                        <div style={style.cardTitle}>
                            <p>Patient First Name</p>               
                        </div>
                        <div style={style.cardContent}>
                            <p>"Latest Message Preview"</p>
                            <p>10 minutes ago</p>
                        </div>
                        <div>                             
                            <Avatar color={'red'} backgroundColor={'grey'} size={30}>A</Avatar>
                            <Avatar color={'red'} backgroundColor={'grey'} size={30}>B</Avatar> 
                            <Avatar color={'red'} backgroundColor={'grey'} size={30}>C</Avatar>
                            <Avatar color={'red'} backgroundColor={'grey'} size={30}>D</Avatar>                            
                        </div>
                </Paper>
            </div>
        );
    }
}