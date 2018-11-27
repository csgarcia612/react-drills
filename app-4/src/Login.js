import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(){
    super();
    this.state={
      username: "",
      password: ""
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  updateUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  updatePassword(event){
      this.setState({
          password: event.target.value
      })
  }

  userLogin(){
      alert(`Username: ${ this.state.username } Password: ${ this.state.password }`)
  }

  render(){
      return(
          <div>
              <input value={this.state.username} onChange={this.updateUsername} />
              <input value={this.state.password} onChange={this.updatePassword} />
              <button onClick={this.userLogin}>Login</button>
          </div>
      )
  }

}

export default Login;