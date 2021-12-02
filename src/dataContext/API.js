import axios from "axios";

//all plants
const getPlant = async(setPlants)=>{
    let endpoint = '/plants';
    const response = await axios.get(endpoint)
    const data = await response.data
    setPlants(data)
}


export default getPlant