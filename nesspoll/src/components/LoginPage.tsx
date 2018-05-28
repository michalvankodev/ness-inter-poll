import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, RaisedButton } from 'material-ui';
import * as request from 'request-promise-native';

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

  async handleClickSignIn() {
    const { username, password } = this.state;
    if (username === '' || password === '') {
      alert('Username or Password is missing');
      return;
    }

    console.log('robimmmmmmmmmm request');
    const res = await request
      .post('http://172.20.0.3:8001/login', { resolveWithFullResponse: true })
      .auth(username, password);

    console.log('response', res);

    if (res.statusCode === 200) {
      window.localStorage.setItem('nessPollToken', res.token);
      
      this.setState({redirect: true});
    }
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
        <div>
          <RaisedButton 
            onClick={() => this.handleClickSignIn()} 
            style={{borderRadius: 3, marginTop: 25, width: 300}} 
            label="Sign In"
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
