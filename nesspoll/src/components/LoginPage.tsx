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
      alert('Username or Password wrongly defined');
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
        <div>
          <TextField hintText="Enter your username" type="text" onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({username: event.currentTarget.value})} floatingLabelText="Username"/>
        </div>
        <div>
          <TextField hintText="Enter your password" onChange={(event: React.FormEvent<HTMLInputElement>) => this.setState({password: event.currentTarget.value})} floatingLabelText="Password"/>
        </div>
        <div className="button">
          <RaisedButton onClick={() => this.handleClickSignIn()} style={{margin: 12}} label="Sign In" />
          <RaisedButton onClick={() => this.handleClickRegister()} style={{margin: 12}} label="Register"/>
        </div>
      </div>
    );
  }
}
  
export default LoginPage;