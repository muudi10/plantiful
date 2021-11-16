import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  // const BASE_API = process.env.REACT_APP_BASE_API

  const [apiA, setData]= useState({})

  const getData = async()=> {
    const res = await axios.get('/plants')
    const data = res.data
    setData(data)
  }
  console.log(apiA)

  useEffect(() =>{
    getData()
  },[])

  return (
    <div className="App">
 
    </div>
  );
}

export default App;
