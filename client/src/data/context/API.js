import  axios from 'axios' ;

const getData = async (setDataSource)=>{
  const response = await axios.get("/plants")
  const data = await response.data
  setDataSource(data)
}  


  export default getData;
  