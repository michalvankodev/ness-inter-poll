import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';

interface LoginState {
    username: string;
    password: string;
    redirect: boolean;
}

interface LoginProps {
    user: {
      username: string;
      password: string;
    };
}

class LoginPage extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = ({
        username: '',
        password: '',
        redirect: false
    });
   }

  handleClickSignIn() {
    let isExisting = (this.state.username === this.props.user.username) && (this.state.password === this.props.user.password);

    if (this.state.username === '' || this.state.password === '') {
      alert('Username or Password is missing');
      return;
    }

    if (!isExisting) {
      alert('Username or Password is not correct');
      return;
    }

    this.setState({redirect: true});
  }

  handleClickRegister() {
    alert('Not supported');
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home"/>;
    }

    return (
      <div className="login_page">
        <img src={require('../assets/images/logo-ness.png')} className="logo" />
        <div>
          <label style={{color: '#02a5ca', fontWeight: 'bold', fontSize: 26}}>POLL</label>
        </div>
        <div>
          <TextField
            hintText="Enter your username"
            style={{marginLeft: 15, marginRight: 15}}  
            type="text" 
            onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({username: event.currentTarget.value})} 
            floatingLabelText="Username"
          /> 
        </div>
        <div>
          <TextField 
           hintText="Enter your password"
           style={{marginLeft: 15, marginRight: 15}} 
           onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({password: event.currentTarget.value})} 
           floatingLabelText="Password"
          />
        </div>
        <div className="button">
          <RaisedButton 
            onClick={() => this.handleClickSignIn()} 
            style={{marginTop: 25}} 
            label="Sign In"
            fullWidth={true} 
          />
        </div>
        <div className="request">
          <label 
            style={{marginTop: 10, marginBottom: 10, marginRight: 2,  color: '#A9A9A9', fontSize: 12}}
          >
            Don't have an account?
          </label>
          <a 
            href="http://nesslife.sk" 
            style={{marginTop: 10, marginBottom: 10, color: '#FFFFFF', fontSize: 12}}
          >
            Request One
          </a>
        </div>
      </div>
    );
  }
}
  
export default LoginPage;