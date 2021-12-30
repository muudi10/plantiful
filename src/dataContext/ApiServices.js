import axios from "axios";

const baseURL = `https://api.eastberry.io`

const ApiCalls = {

    getAllPlants: async (setPlants) => {
        // const baseURL = `/`

        let endpoint = '/plants';
        const response = await axios.get(endpoint)
        const data = await response.data
        setPlants(data)


    },
    getPlantById: async (plantId, setSinglePlant) => {
        let endpoint = `/plants/${plantId}`
        const response = await axios.get(endpoint)
        const data = await response.data
        setSinglePlant(data)

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

    addPlant: async (loggedInUSerId, plantId) => {

        try {
            const response = await axios.post(`/users/user/addplant`, {
                userid: loggedInUSerId,
                plantid: plantId

            })
            console.log(response)

        } catch (error) {
            console.log(error)

        }

    },
    userRegister: async (fields, setMessage) => {
        try {
            const response = await axios.post(`/auth/register`, {
                name: fields.name,
                email: fields.email,
                password: fields.password,

            })
            response.data && window.location.replace("/auth/login");



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
            let endpoint = `/auth/login`
            const response = await axios.post(endpoint, {
                email: loginField.email,
                password: loginField.password
            })
            console.log(response.data.others)
            response && localStorage.setItem("token", JSON.stringify(response.data.token))
            response && localStorage.setItem("plants", JSON.stringify(response.data.others.userPlants))
            response && localStorage.setItem("userId", JSON.stringify(response.data.others._id))
            response && localStorage.setItem("id", (response.data.others._id))
            response && localStorage.setItem("userEmail", JSON.stringify(response.data.others.email))

            console.log(response.data.others.email)
            response && setIsLoggedIn(true)
            await setUserGlobalState({
                ...userGlobalState,
                userDetails: response.data.others,
                token: response.data.token,
                userId: response.data.others,
                userPlants: response.data.userPlants,

            })

            response && setUser(response.data.userPlants)
            const loggedInUSerId = localStorage.getItem("id")

            response && window.location.replace(`/users/${loggedInUSerId}`)
            console.log(JSON.stringify(response.data.others._id))
        } catch (error) {
            console.log(error)

        }
    },

    CreateNotification: async (notificationInfo, user) => {


        try {
            const response = await axios.post('/notification', {
                userId: user,
                plantId: notificationInfo.plantId,
                frequency: notificationInfo.frequency,
                plantName: notificationInfo.plantName,
                userEmail: "jeilani@gmail.com"
            })

         

        } catch (error) {
            console.log(error)

        }

    },
    PauseNotification: async (user, plantId) => {
        try {
            const response = await axios.put('/notification/status/update', {
                userId: user,
                plantId: plantId,


            })

        } catch (error) {
            console.log(error)

        }

    },
    removePlant: async (user, plantId) => {
        try {
            const response = await axios.put('/plants/delete/', {
                userId: user,
                plantId: plantId,


            })
            response && window.location.reload(true)
            console.log(response)

        } catch (error) {
            console.log(error)

        }

    },
    watered: async (user, plantId) => {
        try {
            const response = await axios.put('/notification/watered/', {
                userId: user,
                plantId: plantId,
            })
            console.log(response)

        } catch (error) {
            console.log(error)

        }

    }



}

export default ApiCalls