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
    userLogin: async (loginField, setUser, setIsLoggedIn, userGloblaState,
        setUserGlobalState) => {
        try {

            const response = await axios.post('/auth/login', {
                email: loginField.email,
                password: loginField.password
            }, )
            console.log(response.data.others._id)
            response && localStorage.setItem("token", JSON.stringify(response.data.token))
            response && setIsLoggedIn(true)
            await setUserGlobalState({
                ...userGloblaState,
               token: response.data.token,
            })
            response && setUser(response.data.userPlants)
            response && window.location.replace("/dashboard")
        } catch (error) {
            console.log(error)

        }
    }




}

export default ApiCalls