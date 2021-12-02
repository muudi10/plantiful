import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const initialState = {
	alert: {
		message: "",
		isSuccess: false,
	}
};

const RegisterForm = () => {
	const [fields, setFields] = useState({
		username: "Admin",
		email: "User123@hotmail.com",
		password: "User1234",
		confirmPassword: "User1234"
	});
	const [alert, setAlert] = useState(initialState.alert);

	const handleInputChange = (e) => {
		setFields({ ...fields, [e.target.name]: [e.target.value] });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setAlert({ message: '', isSuccess: false });
		if (fields.password !== fields.confirmPassword) {
			console.log(fields.password)
			console.log(fields.confirmPassword)
			setAlert({
				message: "Passwords do not match",
				isSuccess: false,
			})
		} else {
			axios
				.post("http://localhost:4000/auth/register", {
					username: fields.username,
					email: fields.email,
					password: fields.password
				})
				.then((response) => {
					console.log(response)
					setAlert({
						message: "Registration Successful",
						isSuccess: true,
					});
				})
				.catch((error) => {
					console.log(error)
					setAlert({
						message: "Server error. Please try again later",
						isSuccess: false,
					});
				});
	}};
	return (
		<div>
			<div>
				<h2>Sign up</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='textbox'
						className='form_control'
						id='username'
						name='username'
						value={fields.username}
						onChange={handleInputChange}
						placeholder='Create username'
						required
					/>
				</div>
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
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						className='form_control'
						id='password'
						name='password'
						value={fields.password}
						onChange={handleInputChange}
						placeholder='Create Password'
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
				<Alert message={alert.message} success={alert.isSuccess} />
			</form>
		</div>
	);
};

export default RegisterForm;
