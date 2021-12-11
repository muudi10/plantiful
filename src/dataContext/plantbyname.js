import axios from "axios";

const getPlantByName = async(setPlantByName, latinname) => {
    let endpoint =`/plants/plantname/${latinname}`
    const response = await axios.get(endpoint)
    const data = await response.data[0]
    setPlantByName(data)

}

export default getPlantByName