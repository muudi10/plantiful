import React, { useState } from "react";
import axios from "axios";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";
// import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "../styles/LoginForm.css"

const initialState = {
	fields: {
		username: "",
		password: "",
	},
	alert: {
		message: "",
		isSuccess: false,
	},
}

const LoginForm = () => {
	const [alert, setAlert] = useState(initialState.alert)
	const [loginFields, setLoginFields] = useState(initialState.fields);
	// const [user, setUser] = useState("")
	const [loading, setLoading] = useState(false)

// let navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()
		setLoading(true)
		setAlert({message: "", isSuccess: false})
			axios.post('http://localhost:4000/auth/login', {
				username: loginFields.username,
				password: loginFields.password
			})
			.then((response)=>{
				console.log(response)
					// navigate("/dashboard")
			})
			.catch((error)=> {
				console.log(error)
			})
	};
	const handleInputChange = (e) => {
		setLoginFields({ ...loginFields, [e.target.name]: [e.target.value] });
	};

	return (
		<div className="form_wrapper">
				<h2 className="signin_header">Sign in to Plantiful</h2>
				<div className="form_container">
			<Form onSubmit={handleLogin}> 
				<Form.Group className='mb-3' controlId='formBasicUsername'>
						<FloatingLabel
							controlId='floatingInput'
							label='Username'
							className='mb-3'
						>
							<Form.Control
							    className="w-50"
								type='textbox'
								placeholder="Username"
								name='username'
								value={loginFields.username}
								onChange={handleInputChange}
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
								value={loginFields.password}
								onChange={handleInputChange}
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
