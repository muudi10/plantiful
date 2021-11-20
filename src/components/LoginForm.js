import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.PreventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}> 
				<div>
					<label htmlFor='email_input'>Email address</label>
					<input
						type='email'
						className='login_form'
						id='loginEmail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Enter email address'
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
