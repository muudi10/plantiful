import axios from 'axios';
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
console.log(urlEndPoint)
const handleUserRegister = async(fields,setMessage ) => {
 
console.log(fields.name);


try {
     const response = await axios.post("/auth/register",{
      name: fields.name,
      username: fields.username,
      password: fields.password,
      email: fields.email,

    })
    const data = await response
    console.log(data.data)
    await setMessage(`Form has been submited sucessfully`)
} catch (error) {

  setMessage(`Failed to submit form`)
} 
    console.log(`function trigered`, fields)
    

  };

  export default handleUserRegister