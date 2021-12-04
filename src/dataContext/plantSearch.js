import axios from "axios";

//all plants
const searchPlant = async(searchTerm)=>{
     let endpoint = '/plant';
    if(searchTerm) {
        endpoint = searchTerm +{searchTerm}
    }
    const response = await axios.get(endpoint)
    const data = await response.data
    
}


export default searchPlant