import { Component } from "react";

import FormLogin from '../../Components/FormLogin';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
 // handleLogin, handlePassword, handleRegister
  handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    username = username.trim();
    password = password.trim();

    if (username.value && password.value) {
      // Here you would typically handle the login logic, e.g., API call
      console.log("Logging in with:", username.value, password.value);
    }
  }

    render() {
      return (
        <div className="Login">
          <h1>Bem-vindo ao Fincoin</h1>
          <FormLogin 
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }
  }


export default Login;