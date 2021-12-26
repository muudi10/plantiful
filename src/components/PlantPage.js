import React, { useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import dummyPlant from "../assets/dummyPlant.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PlantPage.css";
import Alert from "./Alert";
import getPlantByName from '../dataContext/plantbyname'
import ApiCalls from "../dataContext/ApiServices";
import { PlantContext } from "../dataContext/PlantConetx";


const PlantPage = () => {
const {singlePlant} = useContext(PlantContext)

console.log(singlePlant)
const initialState = {
	alert: {
		message: "",
		isSuccess: false,
	}
}
const [plantById, setPlantById] = useState("");
const [user, setUser] = useState("")
  const [alert, setAlert] = useState(initialState.alert)
// useEffect(()=> {

// setUser(localStorage.getItem("userDetails"))

// })

	const settings = {
		dots: true,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 2,
	};
const plantId = window.location.pathname.split("/")[2] 
console.log(plantById)
const [loading, setLoading ]= useState(false)
const [familyName, setFamilyName]=useState()

useEffect(() => {
    const getSinglePlant = async () => {
      const res = await axios.get("/plants/" + plantId);
      setFamilyName(res.data.familyName);
	  setPlantById(res.data)
    };
    getSinglePlant();
  }, [plantId]);
 
const plant_id= window.location.pathname.split("/")[2]

const loggedInUSerId =JSON.parse(localStorage.getItem("userId"))
const email =JSON.parse(localStorage.getItem("userEmail"))
console.log(typeof loggedInUSerId)
console.log(`logged in user is ${loggedInUSerId} and plant id is ${plantId}`)
 const handleSumbit= async()=>{
	const res = await axios.post('/users/user/addplant',{
		plantId: plantId,
		userId: loggedInUSerId
	 }) 
if(res) {
	setAlert({
		message: "Plant added to Dashboard!",
		isSuccess: true
	})
}	

 }
	return (
		<>
		<div className='wrapper'>
  
			<Container >

			{plantById  &&  <div className="title_border">
				<h2 className='plant_title'> {familyName && familyName} </h2>
				</div>
}
				<Slider {...settings}>
					<div>
						<img src={dummyPlant} alt='' width='40%' />
					</div>
					<div>
						<img src={dummyPlant} alt='' width='40%' />
					</div>
					<div>
						<img src={dummyPlant} alt='' width='40%' />
					</div>
					<div>
						<img src={dummyPlant} alt='' width='40%' />
					</div>
				</Slider>
				{}
				<div className='plant_info'>
						<p className='plant_information_latinname'>
                    <span className="plant_info_title">Latin name:</span> {plantById.latinName}
					</p>
					<p className='plant_information_origin'>
						<span className="plant_info_title">Origin:</span> {plantById.origin}

					</p>
					<p className='plant_information_wateringneeds'>
					<span className="plant_info_title">	Watering Needs:</span> {plantById.watering}
					</p>
					<p className='plant_information_temperature'>
                    <span className="plant_info_title">Temperature:</span> {plantById.temperature}&deg;<sup>c</sup>
					</p>
			

					<Button
						type='submit'
						id='submit'
                        className="add_button"
						onClick={handleSumbit}
						style={{
							backgroundColor: "#55A356",
							border: "#013606",
							margin: "8px",
							padding: "10px"
						}}
					>
Add to dashboard

					</Button>

					 <Alert message={alert.message} success={alert.isSuccess} />
				</div>
			</Container>
		</div>
		</>
	);
};

export default PlantPage;


