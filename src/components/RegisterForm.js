import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";
import "../styles/RegisterForm.css";

const initialState = {
	fields: {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	},
	alert: {
		message: "",
		isSuccess: false,
	},
};

const RegisterForm = () => {
	const [fields, setFields] = useState(initialState.fields);
	const [alert, setAlert] = useState(initialState.alert);

	const handleInputChange = (e) => {
		setFields({ ...fields, [e.target.name]: [e.target.value] });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setAlert({ message: "", isSuccess: false });
		if (fields.password !== fields.confirmPassword) {
			console.log(fields.password);
			console.log(fields.confirmPassword);
			setAlert({
				message: "Passwords do not match",
				isSuccess: false,
			});
		} else {
			axios
				.post("http://localhost:4000/auth/register", {
					username: fields.username,
					email: fields.email,
					password: fields.password,
				})
				.then((response) => {
					console.log(response);
					setAlert({
						message: "Registration Successful",
						isSuccess: true,
					});
				})
				.catch((error) => {
					console.log(error);
					setAlert({
						message: "Server error. Please try again later",
						isSuccess: false,
					});
				});
		}
	};
	return (
		<div className="form_wrapper">
			<div>
				<h2 className='signup_header'>Sign up to Plantiful</h2>
			</div>
			<div className="form_container">
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicUsername'>
						<FloatingLabel
							controlId='floatingInput'
							label='Create Username'
							className='mb-3'
						>
							<Form.Control
							    className="w-50"
								type='textbox'
								name='username'
								placeholder="Create Username"
								value={fields.username}
								onChange={handleInputChange}
								required
							/>
						</FloatingLabel>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<FloatingLabel
							controlId='floatingInput'
							label='Enter your email address'
							className='mb-3'
						>
							<Form.Control
								type='email'
								name='email'
								placeholder='Enter your email address'
								value={fields.email}
								onChange={handleInputChange}
								className="w-50"
								required
							/>
						</FloatingLabel>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<FloatingLabel
							controlId='floatingInput'
							label='Create Password'
							className='mb-3'
						>
							<Form.Control
								type='password'
								className="w-50"
								placeholder='Create Password'
								data-testid='passwordinput'
								name='password'
								value={fields.password}
								onChange={handleInputChange}
								required
							/>
						</FloatingLabel>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
						<FloatingLabel
							controlId='floatingInput'
							label='Confirm Password'
							className='mb-3'
						>
							<Form.Control
								type='password'
								className="w-50"
								placeholder="Confirm Password"
								data-testid='confirmPassword'
								name='confirmPassword'
								value={fields.confirmPassword}
								onChange={handleInputChange}
								required
							/>
						</FloatingLabel>
					</Form.Group>
					<Button
						type='submit'
						id="submit"
						className='button-primary'
						data-testid='submitbutton'
						style={{ backgroundColor: "#55A356", border: "#013606"}}
					>
						Create account <ArrowRight size={20} />
					</Button>
					<p className="member_text">Already a member?<a href="/loginform" className="signin_link"> Sign in </a></p>
					<Alert message={alert.message} success={alert.isSuccess} />
				</Form>
				</div>
		</div>
	);
};

export default RegisterForm;
