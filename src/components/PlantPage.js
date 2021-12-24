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
const { DataContext } = require("../dataContext/DataContext")


const PlantPage = () => {
const initialState = {
	alert: {
		message: "",
		isSuccess: false,
	}
}
const [plantByName, setPlantByName] = useState([]);
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

	const { latinname } = useParams();

const familyName = plantByName.familyName
const watering = plantByName.watering
	useEffect(() => {
		axios
			.get(`/plants/plantname/${latinname}`)

			.then((response) => {
				setPlantByName(response.data[0]);
			})
			.catch((error) => console.log(error));
	}, [latinname]);

function addPlant (plant) {

	let existingPlants = localStorage.getItem("userPlants");
	let existingPlantsActual = existingPlants ? JSON.parse(existingPlants) : [];
	// const currentPlantSaved = existingPlants.find((x) => x.id === plant.id)
	// 	if (currentPlantSaved) {
	// 		const filteredPlantList = existingPlants.filter(
	// 			(x) => x.id !== plant.id
	// 		)
existingPlantsActual.push(familyName)
setUser(localStorage.setItem(
	"userPlants", JSON.stringify(existingPlantsActual),
	setAlert({
          message: 'Plant added to dashboard!',
          isSuccess: true,
        })
))}

// else {

// existingPlants.push(familyName)
// setUser(localStorage.setItem(
// 	"userPlants", JSON.stringify(existingPlants)))
// }}

	return (
		<>
		<div className='wrapper'>

			<Container >
			<div className="title_border">
				<h2 className='plant_title'> {plantByName.familyName} </h2>
				</div>
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

				<div className='plant_info'>
						<p className='plant_information_latinname'>
                    <span className="plant_info_title">Latin name:</span> {plantByName.latinName}
					</p>
					<p className='plant_information_origin'>
						<span className="plant_info_title">Origin:</span> {plantByName.origin}

					</p>
					<p className='plant_information_wateringneeds'>
					<span className="plant_info_title">	Watering Needs:</span> {plantByName.watering}
					</p>
					<p className='plant_information_temperature'>
                    <span className="plant_info_title">Temperature:</span> {plantByName.temperature}&deg;<sup>c</sup>
					</p>
				
					<Button
						type='submit'
						id='submit'
                        className="add_button"
						onClick={addPlant}
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


