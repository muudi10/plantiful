import React from 'react'

const RegisterForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="input_email">Email Address:</label>
                    <input type="email"
                    className="form_control"
                    id="email"
                    placeholder="Enter email address" />
                </div>
                <div>
                    <label htmlFor="input_password">Password:</label>
                    <input type="password"
                    className="form_control"
                    id="password"
                    placeholder="password"></input>
                </div>
                <div>
                    <label htmlFor="input_confirmpassword">Confirm Password:</label>
                    <input type="password"
                    className="form_control"
                    id="confirm_password"
                    placeholder="Confirm Password"></input>
                </div>
                <button 
                type="submit"
                className="button-primary">Create account</button>
            </form>
        </div>
    )
}

export default RegisterForm
