import React, { useState } from 'react';
import './Signupstyles.css';
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

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-title">Sign Up</h1>
        <input
          className="signup-input"
          type="text"
          placeholder="Username"
          value={userFormData.username}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={userFormData.email}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={userFormData.password}
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
