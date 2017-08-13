import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './components/login/login-component';
import Register from './components/register/register-component';
import LoginReset from './components/login/login-reset/login-reset-component';
import ResetSuccess from './components/login/login-reset/success/success-component';
import Careport from './components/careport/careport-component';
import CareportPreview from './components/careport/preview/preview-component';

import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <MuiThemeProvider>
        <Careport />
    </MuiThemeProvider>
);

ReactDOM.render(
                    <App />,
                     document.getElementById('root')                     
               );
registerServiceWorker();
