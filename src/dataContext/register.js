import axios from 'axios';
import { Navigate } from "react-router-dom";
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
console.log(urlEndPoint)


const handleUserRegister = async(fields,setMessage ) => {
console.log(fields.name);


try {
     const response = await axios.post("/auth/register",{
      name: fields.name,
      email: fields.email,
      password: fields.password,

    })
    const data = await response
    console.log(data.data)
    await setMessage(`Successfully created your account. Welcome to Plantiful!`)


} catch (error) {

  setMessage(`Sorry, there has been an error. Please try again.`)
} 
    console.log(`Function triggered`, fields)
    

  };

  export default handleUserRegister