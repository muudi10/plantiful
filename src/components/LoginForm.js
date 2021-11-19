import React from "react";

const LoginForm = () => {
	return (
		<div>
			<form>
				<div>
					<label htmlFor='email_input'>Email address</label>
					<input
						type='email'
						className='login_form'
						id='loginEmail'
						placeholder='Enter email address'
					/>
				</div>
				<div>
					<label htmlFor='password_input'>Password</label>
					<input
						type='password'
						className='login_form'
						id='loginPassword'
						placeholder='password'
					></input>
				</div>
				<button type='submit' className='button-primary'>
					Log in
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
