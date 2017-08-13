import React, { Component } from 'react';
import Preview from './preview/preview-component';
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
                <div>
                    
                    {this.previews}
                </div>
            </div>
        );
    }
}