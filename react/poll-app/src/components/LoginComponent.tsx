import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue300 } from 'material-ui/styles/colors'; 

const customMui = getMuiTheme({
        palette: {
          textColor: lightBlue300,
        },
        appBar: {
          height: 30,
        },
        textField: {
          floatingLabelColor: lightBlue300,
          focusColor: lightBlue300,
        }
});

export default class LoginComponent extends React.Component {
        handleLogin() {
                alert('Login clicked');
        }

        handleRegister() {
                alert('Register clicked');
        }
        
        render() {
                return (
                        <div>
                                <div>
                                        <MuiThemeProvider muiTheme={customMui}> 
                                                <TextField floatingLabelText="Username"/>
                                        </MuiThemeProvider>
                                </div>
                                <br/>
                                <div>
                                        <MuiThemeProvider muiTheme={customMui}>
                                                <TextField floatingLabelText="Password"/>
                                        </MuiThemeProvider>
                                </div>
                                <br/>
                                <div>
                                        <MuiThemeProvider muiTheme={customMui}>
                                                <RaisedButton label="Login" onClick={this.handleLogin}/>
                                        </MuiThemeProvider>
                                        <MuiThemeProvider muiTheme={customMui}> 
                                                <RaisedButton label="Register" onClick={this.handleRegister}/>
                                        </MuiThemeProvider>
                                </div>
                        </div>
                );
        }
}