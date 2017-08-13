import React, { Component } from 'react';

import GlobalStyles from '../../../styles';
import style from './preview-styles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Preview extends Component {
    render(){
        return(
            <div style={GlobalStyles.container}>
                <Card style={style.cardConatiner}>
                        <CardHeader
                            title="Carecircle Preview"
                            subtitle="Subtitle"                 
                            />
                    
                </Card>
            </div>
        );
    }
}