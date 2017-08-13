import React, { Component } from 'react';
import GlobalStyles from '../../../../styles';
import style from './success-styles';
import Card from 'material-ui/Card'
export default class Success extends Component {
    render(){
        return(
            <div style={GlobalStyles.container}>
                <Card style={style.cardContainer}>                
                    <p>A password reset link has been send to test@test.com</p>
                </Card>
            </div>
        );
    }
}