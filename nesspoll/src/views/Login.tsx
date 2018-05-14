import * as React from 'react';
import LoginPage from '../components/LoginPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue400, black, white, grey400 } from 'material-ui/styles/colors';

const materialTheme = getMuiTheme({
    palette: {
        textColor: black,
      },
      textField: {
        floatingLabelColor: grey400,
        focusColor: lightBlue400,
        hintColor: grey400,
        textColor: white
      },
      raisedButton: {
        color: lightBlue400,
        textColor: white,
      }
});

interface LoginState {
  user: {
    username: string;
    password: string;
  };
}

/* tslint:disable no-any */
class Login extends React.Component<any, LoginState> {
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
      <div className="login_container">
        <MuiThemeProvider muiTheme={materialTheme}>
          <LoginPage user={this.state.user}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;