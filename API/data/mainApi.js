const axios = require('axios') ;
require('dotenv').config()
const urlEndPoint = process.env.APIENDPOINT
const getData = async() => {
    const plants = await axios.get(`https://f7tjuu3dc1.execute-api.us-east-1.amazonaws.com/test/plants`,
        )
     const data = await plants.data
     console.log(data)



}

getData()