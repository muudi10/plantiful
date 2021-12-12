import axios from 'axios';
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
    await setMessage(`Form has been submited sucessfully`)
} catch (error) {

  setMessage(`Failed to submit form`)
} 
    console.log(`function triggered`, fields)
    

  };

  export default handleUserRegister