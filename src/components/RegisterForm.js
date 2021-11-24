import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
	fields: {
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	},
};

const RegisterForm = () => {
	const [fields, setFields] = useState(initialState.fields);
	const handleInputChange = (e) => {
		setFields({ ...fields, [e.target.name]: [e.target.value] });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// if(fields.password === fields.confirmPassword)
		console.log({ ...fields });
	};
	return (
		<div>
			<div>
				<h2>Sign up</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email Address</label>
					<input
						type='email'
						className='form_control'
						id='email'
						name='email'
						value={fields.email}
						onChange={handleInputChange}
						placeholder='Enter email address'
						required
					/>
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='textbox'
						className='form_control'
						id='username'
						name='username'
						value={fields.username}
						onChange={handleInputChange}
						placeholder='Enter username'
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						className='form_control'
						id='password'
						name='password'
						value={fields.password}
						onChange={handleInputChange}
						placeholder='password'
						required
					></input>
				</div>
				<div>
					<label htmlFor='confirmpassword'>Confirm Password</label>
					<input
						type='password'
						className='form_control'
						id='confirmPassword'
						data-testid='confirmPassword'
						name='confirmPassword'
						value={fields.confirmPassword}
						onChange={handleInputChange}
						placeholder='Confirm Password'
						required
					></input>
				</div>
				<button
					type='submit'
					className='button-primary btn btn-primary'
					data-testid='submitbutton'
				>
					Create account
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
