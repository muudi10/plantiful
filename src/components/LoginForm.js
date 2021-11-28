import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

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
		<div>
			<div>
				<h2>Sign in</h2>
			</div>
			<form onSubmit={handleLogin}> 
				<div>
					<label htmlFor='username_input'>Username</label>
					<input
						type='text'
						className='login_form'
						id='loginUsername'
						name="username"
						value={loginFields.username}
						onChange={handleInputChange}
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
						name="password"
						value={loginFields.password}
						onChange={handleInputChange}
						placeholder='password'
                        required
					></input>
				</div>
				<input type="button" value={loading ? "Loading..." : "Log in"}>
				</input>
				<Alert message={alert.message} success={alert.isSuccess} />
			</form>
		</div>
	);
};

export default LoginForm;
