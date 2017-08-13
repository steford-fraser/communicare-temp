import React, { Component } from 'react';
import GlobalStyle from '../../styles';
import style from './careport-styles';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'
export default class CarePort extends Component{
    render(){
        return(
            <div style={{height: '100vh',}}>
                <AppBar
                    title="Careport" 
                    iconElementRight={<FlatButton label="Menu"/>}
                    />
                <div style={GlobalStyle.container}>

                </div>
            </div>
        );
    }
}