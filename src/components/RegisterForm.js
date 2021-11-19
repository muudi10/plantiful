import React, { useState } from "react";

const initialState = {
	fields: {
		email: "",
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
					></input>
				</div>
				<button
					type='submit'
					className='button-primary'
					data-testid='submitbutton'
				>
					Create account
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
