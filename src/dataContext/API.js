import axios from "axios";



const getPlant = async(setPlants)=>{
    let endpoint = '/plants';
    const response = await axios.get(endpoint)
    console.log(response)
    const data = await response.data
    setPlants(data)
    console.log( typeof (data[0]._id))

    }

export default getPlant
