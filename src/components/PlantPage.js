import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../styles/PlantPage.css";

const PlantPage = () => {
	const [plantByName, setPlantByName] = useState();

	const { latinname } = useParams();

	useEffect(() => {
		axios
			.get(`/plants/plantname/${latinname}`, {})
			.then((response) => {
				setPlantByName(response.data);
			})
			.catch((error) => console.log(error));
	}, [latinname]);
	console.log(latinname);
    console.log(plantByName)
	return (
		<div className='wrapper'>
			{/* {plantByName &&
				plantByName.map((plant) => (
					<Container>
						<h2 className='plantpage_title'>{plant.familyName}</h2>

						<img src='' alt='' />
					</Container>
				))} */}
                <Container>
                    {latinname}
                 
                </Container>
		</div>
	);
};

export default PlantPage;
