import React, { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div>
				<h2>Sign in</h2>
			</div>
			<form onSubmit={handleSubmit}> 
				<div>
					<label htmlFor='username_input'>Username</label>
					<input
						type='text'
						className='login_form'
						id='loginUsername'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder='Enter username'
                        required
					/>
				</div>
				<div>
					<label htmlFor='password_input'>Password</label>
					<input
						type='password'
						className='login_form'
						id='loginPassword'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='password'
                        required
					></input>
				</div>
				<button
					type='submit'
					className='button-primary'
					data-testid='loginbutton'
				>
					Log in
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
