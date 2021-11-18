import React, {useState} from 'react'

const initialState = {
    fields: {
        email: '',
        password: '',
        confirmPassword: ''
    }
}

const RegisterForm = () => {
    const [fields, setFields] = useState(initialState.fields)
    const handleInputChange = (e) => {
      setFields({...fields, [e.target.id]:[e.target.value]})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(fields.password === fields.confirmPassword) {

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="input_email">Email Address</label>
                    <input type="email"
                    className="form_control"
                    id="email"
                    value={fields.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address" />
                </div>
                <div>
                    <label htmlFor="input_password">Password</label>
                    <input type="password"
                    className="form_control"
                    id="password"
                    value={fields.password}
                    onChange={handleInputChange}
                    placeholder="password"></input>
                </div>
                <div>
                    <label htmlFor="input_confirmpassword">Confirm Password</label>
                    <input type="password"
                    className="form_control"
                    id="confirmPassword"
                    value={fields.confirmPassword}
                    onChange={handleInputChange}
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
