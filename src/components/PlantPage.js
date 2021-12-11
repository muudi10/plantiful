import React, { useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { ArrowRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import dummyPlant from "../assets/dummyPlant.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PlantPage.css";
import getPlantByName from '../dataContext/plantbyname'
const { DataContext } = require("../dataContext/DataContext")


const PlantPage = () => {
// const { plants, plantByName, setPlantByName } = useContext(DataContext)
const [plantByName, setPlantByName] = useState([]);
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

	useEffect(() => {
		axios
			.get(`/plants/plantname/${latinname}`)

			.then((response) => {
				setPlantByName(response.data[0]);
			})
			.catch((error) => console.log(error));
	}, [latinname]);


	return (
		<>
		<div className='wrapper'>

			<Container>
				<h2 className='plant_title'> {plantByName.familyName} </h2>
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
						style={{
							backgroundColor: "#55A356",
							border: "#013606",
							margin: "8px",
							padding: "10px"
						}}
					>
Add to dashboard <ArrowRight size={20} />

					</Button>
				</div>
			</Container>
		</div>
		</>
	);
};

export default PlantPage;
