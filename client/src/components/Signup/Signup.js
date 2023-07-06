import React, { useState } from 'react';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	// ...form submission and validation logic can be added here
  
	return (
	  <div

	  	// Would like to move these styles to seperate files
		style={{
		  display: 'flex',
		  justifyContent: 'center',
		  alignItems: 'center',
		  height: '100vh'
		}}
	  >
		<form>
		  <h1>Sign Up</h1>
		  <input
			type="text"
			placeholder="Username"
			value={username}
			onChange={(e) => setUsername(e.target.value)}
		  />
		  <input
			type="email"
			placeholder="Email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
		  />
		  <input
			type="password"
			placeholder="Password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		  />
		  <button type="submit">Sign Up</button>
		</form>
	  </div>
	);
  };
  
  export default SignUp;
  