import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';

import { useHistory } from 'react-router-dom';
import './SigninStyles.css';
import backgroundImg from '../Signin/signin.jpg';

const SignIn = ({ handleSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { error }] = useMutation(LOGIN);
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });

      // Sign in successful
      const { token, user } = data.login;
      handleSignIn(token, user.username);

      // Reset form fields after successful sign-in
      setEmail('');
      setPassword('');

      // Redirect to home page
      history.push('/');
    } catch (err) {
      // Sign in failed
      // Handle error or display error message
      console.error('Sign-in error:', err);
    }
  };

  return (
    <div className="signin-container" 
    style={{ backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}>
      <form className="signin-form" onSubmit={handleFormSubmit}>
        <h1 className="signin-title">Sign In</h1>
        <input
          className="signin-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signin-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signin-submit-btn" type="submit">
          Sign In
        </button>
      </form>
      {error && <p>Error occurred during sign-in. Please try again.</p>}
    </div>
  );
};

export default SignIn;
