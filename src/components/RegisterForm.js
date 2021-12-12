import React, { useContext } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ArrowRight } from "phosphor-react";
import {DataContext} from '../dataContext/DataContext'
import "../styles/RegisterForm.css";


const RegisterForm = () => {
	const {handleFieldChange, message, fields, handleSubmit} = useContext(DataContext)

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
							label='Enter your name'
							className='mb-3'
						>
							<Form.Control
							    className="w-50"
								type='textbox'
								name='name'
								placeholder="Enter your name"
								value={fields.name}
								onChange={handleFieldChange}
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
								onChange={handleFieldChange}
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
								onChange={handleFieldChange}
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
								onChange={handleFieldChange}
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
				  <p> {message && message} </p>
				</Form>
				</div>
		</div>
	);
};

export default RegisterForm;
