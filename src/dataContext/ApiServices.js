import axios from "axios";


const ApiCalls = {

    getAllPlants: async (setPlants) => {
        const baseURL = `https://api.eastberry.io`

        let endpoint = '/plants';
        const response = await axios.get(baseURL+endpoint)
        const data = await response.data
        setPlants(data)


    },
    getPlantByName: async (setPlantByName, latinname) => {
        let endpoint = `/plants/plantname/${latinname}`
        const response = await axios.get(endpoint)
        const data = await response.data[0]
        setPlantByName(data)

    },
    searchPlant: async (searchTerm) => {

        let endpoint = '/plant';
        if (searchTerm) {
            endpoint = searchTerm + {
                searchTerm
            }
        }
        const response = await axios.get(endpoint)
        const data = await response.data

    },
    userRegister: async (fields, setMessage) => {
        try {
            const response = await axios.post("/auth/register", {
                name: fields.name,
                email: fields.email,
                password: fields.password,

            })
            response.data && window.location.replace("/loginForm");



            //    const data = await response
            console.log(response.data)
            await setMessage(`Form has been submited sucessfully`)
        } catch (error) {


            setMessage(`Failed to submit form`)
        }


    },
    userLogin: async (loginField, setUser, setIsLoggedIn, userGlobalState,
        setUserGlobalState) => {
        try {

            const response = await axios.post('/auth/login', {
                email: loginField.email,
                password: loginField.password
            }, )
            console.log(response.data.others)
            response && localStorage.setItem("token", JSON.stringify(response.data.token))
            response && localStorage.setItem("plants", JSON.stringify(response.data.others.userPlants))
            console.log(response.data.others.email)
            response && setIsLoggedIn(true)
            await setUserGlobalState({
                ...userGlobalState,
                userDetails:response.data.others,
                token:response.data.token,
                userId: response.data.others,
                userPlants:response.data.userPlants,

            })
            response && setUser(response.data.userPlants)
            response && window.location.replace("/dashboard")
        } catch (error) {
            console.log(error)

        }
    },
    CreateNotification: async(plantId, userId, userEmail, plantName)=> {

        try {
          const response = await  axios.post('/notification')
          console.log(response)
            
        } catch (error) {
            console.log(error)
            
        }

    }



}

export default ApiCalls