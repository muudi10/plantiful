import React,{useContext} from 'react'
import {DataContext} from '../../dataContext/DataContext'
export default function Register() {

    const {message,handleFieldChange, fields, handleSubmit} = useContext(DataContext)
    console.log(fields)
    return (
        <>
        <div className="mainclass flex"> 
        <div className="register user">
         
          <form className="form">
            <fieldset className="input-text-fields">
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  value={fields.name}
                  className="input-title"
                  name="name"
                  id="name"
                  onChange={handleFieldChange}
                />
              </label>
              <label htmlFor="name">
                username:
                <input
                  type="text"
                  value={fields.username}
                  className="input-title"
                  name="username"
                  id="username"
                  onChange={handleFieldChange}
                />
              </label>

              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  htmlFor="email"
                  name="email"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </label>
            
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  value={fields.password}
                  className="input-title"
                  name="password"
                  id="password"
                  onChange={handleFieldChange}
                />
              </label>            
              <label htmlFor="name">
                Confirm password:
                <input
                  type="password"
                  value={fields.confirmPassword}
                  className="input-title"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleFieldChange}
                />
              </label>
            
              <button className="button" type="submit" onClick={handleSubmit}  >
                Submit
              </button>
              <p> {message && message} </p>
            </fieldset>
          </form>
        </div>
       </div>
         </>
            
    )
}
