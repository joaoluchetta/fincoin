import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/paths';

import FormLogin from '../../Components/FormLogin';
import './LoginView.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    navigate(paths.home);
    // if (trimmedUsername && trimmedPassword) {
    //   console.log("Logging in with:", trimmedUsername, trimmedPassword);
    //   navigate('/home');
    // }
  }

  const handleLogin = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRegister = () => {
    console.log("Clicou em registrar");
  }

  return (
    <div className="login-view">
      <h1>Bem-vindo ao Fincoin</h1>
      <FormLogin
        handleSubmit={handleSubmit}
        handleLogin={handleLogin}
        handlePassword={handlePassword}
        handleRegister={handleRegister}
      />
    </div>
  );
}