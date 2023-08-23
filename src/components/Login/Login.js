import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Gap from '../common/Gap';
import Logo from '../../logo.svg';
import './Logic.css';
import url from '../../utils/Api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      return navigate('/home');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/auth/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('token', response.data.data.token);

        navigate('/home');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    }
  };

  return (
    <div className="login">
      <img src={Logo} height={150} alt="logo" />
      <span className="login_content">
        Enter your email address to sign in and continue
      </span>
      <Gap x={10} />
      <form onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            id="outlined-basic"
            type="text"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Gap x={10} />
        <Grid item>
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Gap x={10} />
        <div className="login_button">
          <Grid>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default Login;
