import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signupstyles.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import backgroundImg from '../Signup/meditation.jpg';

const SignUp = ({ handleSignIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username,
          email,
          password,
        },
      });

      // Handle successful sign-up
      console.log('User created:', data);

      // Reset form fields after successful submission
      setUsername('');
      setEmail('');
      setPassword('');

      // Perform automatic login
      if (handleSignIn) {
        const { token, user } = data.addUser;
        handleSignIn(token, user.username);
      }

      // Redirect to home page
      history.push('/');
    } catch (err) {
      // Handle error during sign-up
      console.error('Sign-up error:', err);
    }
  };

  return (
    <div 
      className="signup-container"
      style={{ 
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form className="signup-form" onSubmit={handleSignUp}>
        <h1 className="signup-title">Sign Up</h1>
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-submit-btn" type="submit">
          Sign Up
        </button>
        {error && <p>Error occurred during sign-up. Please try again.</p>}
      </form>
    </div>
  );
};

export default SignUp;
