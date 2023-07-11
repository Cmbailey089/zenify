import React, { useState } from 'react';
import './Signupstyles.css';
import backgroundImg from '../Signup/meditation.jpg';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

const SignUp = () => {
	const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

	const [validated] = useState(false);

	const [showAlert, setShowAlert] = useState(false);
	const [addUser, { error }] = useMutation(ADD_USER);
  
	const handleChange = (event) => {
	  const { name, value } = event.target;
	  setUserFormData({ ...userFormData, [name]: value });
	};
  
	const handleFormSubmit = async (event) => {
	  event.preventDefault();
  
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	  }
  
	  try {
		console.log(userFormData)
		const { data } = await addUser({
		  variables: { ...userFormData}
		})
  
		Auth.login(data.addUser.token);
	  } catch (err) {
		console.error(err);
		setShowAlert(true);
	  }
  
	  setUserFormData({
		username: '',
		email: '',
		password: '',
	  });
	};

  // ...form submission and validation logic can be added here

  return (
    <div className="signup-container"
     style={{
       backgroundImage: `url(${backgroundImg})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
        }}>
      
      <div className="background"></div>
      <form className="signup-form">
        <h1 className="signup-title">Sign Up</h1>
        <input
          className="signup-input"
          type="text"
		      name="username"
          placeholder="Username"
        //   value={userFormData.username}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="email"
		      name='email'
        //   value={userFormData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="signup-input"
          type="password"
		      name='password'
          placeholder="Password"
        //   value={userFormData.password}
          onChange={handleChange}
        />
        <button className="signup-submit-btn" type="submit" validated={validated ? true : undefined} onClick={handleFormSubmit}>
          Sign Up
        </button>
      </form>
	  {error && (
              <div className="alert" 
			  dismissible onClose={() => setShowAlert(false)} 
			  show={showAlert}>
                {error.message}
              </div>
            )}
    </div>
  );
};

export default SignUp;
