import React, { useContext } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";
import grass from "../assets/grass.png"
import Alert from "./Alert";
import "../styles/LoginForm.css"
import {UserContext} from '../dataContext/UserContext'


const LoginForm = () => {
 const { loginField, handleLogin, handleLoginInputChange,alert, loading, user, isLoggedIn } = useContext(UserContext)

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
							style={{color: "#565956"}}
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
							style={{color: "#565956"}}
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
					<div className="button_and_membertext_login">
					<Button
						type='submit'
						id="submit"
						className='login_button'
						value={loading ? "Loading..." : "Log in"}
						data-testid='submitbutton'
						style={{ backgroundColor: "#55A356", border: "#013606"}}
					>
						Log in<ArrowRight size={20} />
					</Button>
				
				<p className="login_member_text">Not a member?<a href="/registerform" className="signup_link"> Sign up now</a></p>
				</div>
				<Alert message={alert.message} success={alert.isSuccess} />
			</Form>
			<img src={grass} alt="" style={{width:"50%"}} className="grass_one"/>
				<img src={grass} alt="" style={{width:"50%"}} className="grass_two"/>
			</div>
		</div>
	);
};

export default LoginForm;
