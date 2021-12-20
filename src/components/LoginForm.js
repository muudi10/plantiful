import React, { useContext } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";
// import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "../styles/LoginForm.css"
import {UserContext} from '../dataContext/UserContext'


const LoginForm = () => {
 const { loginField, handleLogin, handleLoginInputChange,alert, loading, user, isLoggedIn } = useContext(UserContext)
	// let navigate = useNavigate()
	console.log(user)
	console.log(isLoggedIn)
	return (
		<div className="form_wrapper">
				<h2 className="signin_header">Sign in to Plantiful</h2>
				<div className="form_container">
			<Form onSubmit={handleLogin} > 
				<Form.Group className='mb-3' controlId='formBasicUsername'>
						<FloatingLabel
							controlId='floatingInput'
							label='Email address'
							className='mb-3'
						>
							<Form.Control
							    className="w-50"
								type='textbox'
								placeholder="email"
								name='email'
								value={loginField.email}
								onChange={handleLoginInputChange}
								required
							/>
						</FloatingLabel>
					</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
						<FloatingLabel
							controlId='floatingInput'
							label='Password'
							className='mb-3'
						>
							<Form.Control
								type='password'
								className="w-50"
								placeholder="Password"
								data-testid='passwordlogin'
								name='password'
								value={loginField.password}
								onChange={handleLoginInputChange}
								required
							/>
						</FloatingLabel>
					</Form.Group>
					<Button
						type='submit'
						id="submit"
						className='button-primary'
						value={loading ? "Loading..." : "Log in"}
						data-testid='submitbutton'
						style={{ backgroundColor: "#55A356", border: "#013606"}}
					>
						Log in<ArrowRight size={20} />
					</Button>
					<p className="member_text">Not a member?<a href="/registerform" className="signup_link"> Sign up now</a></p>
				<Alert message={alert.message} success={alert.isSuccess} />
			</Form>
			</div>
		</div>
	);
};

export default LoginForm;
