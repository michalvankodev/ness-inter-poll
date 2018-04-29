import * as React from 'react';
import LoginPage from '../components/LoginPage';
import HeaderHome from '../components/HeaderHome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue100, blue500, black, white, grey400 } from 'material-ui/styles/colors';

const materialTheme = getMuiTheme({
    palette: {
        textColor: black,
      },
      textField: {
        floatingLabelColor: grey400,
        focusColor: blue500,
        hintColor: lightBlue100,
      },
      raisedButton: {
        color: blue500,
        textColor: white
      }
});

/* tslint:disable no-any */
class Login extends React.Component<any, any> {
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
          <HeaderHome />
          <LoginPage user={this.state.user}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;