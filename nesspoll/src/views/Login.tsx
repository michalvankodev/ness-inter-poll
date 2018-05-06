import * as React from 'react';
import LoginPage from '../components/LoginPage';
import LoginHome from '../components/LoginHome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey200, blue500, black, white, grey400 } from 'material-ui/styles/colors';

const materialTheme = getMuiTheme({
    palette: {
        textColor: black,
      },
      textField: {
        floatingLabelColor: grey400,
        focusColor: blue500,
        hintColor: grey200,
        
      },
      raisedButton: {
        color: blue500,
        textColor: white,
      }
});

/* tslint:disable no-any */
class Login extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = ({
            user: {
                username: 'test',
                password: 'test'
            }    
        });
       }

render() {
    return (
      <div className="app_container">
        <MuiThemeProvider muiTheme={materialTheme}>
          <LoginHome />
          <LoginPage user={this.state.user}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;