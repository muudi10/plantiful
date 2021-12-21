import React, {useContext, useEffect, useState} from 'react'
import { Container, Button, Form, Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Emoji from "a11y-react-emoji";
import dummyPlant from "../assets/dummyPlant.png"
import {FlowerLotus} from "phosphor-react"
import {UserContext} from '../dataContext/UserContext'
import { useParams } from "react-router-dom"
import "../styles/Dashboard.css"

const Dashboard = () => {
     const [plantData, setPlantData] = useState(JSON.parse(localStorage.getItem('userPlants')))

return (
    <div className="dashboard_wrapper"> 
<Container fluid >
<div className="title_border">
            <h2 className="dashboard_title">Your Plant Dashboard <Emoji symbol="🪴" label="plant-pot"/></h2>
            </div>
            
            <p className="dashboard_text">Welcome to your <span className="brandname">Plantiful</span> dashboard. Here you can set and amend notifications for your plants.</p>
<div className="dashboard_section">
  <Row xs={2} md={4} className="g-4" >
  <Col>
   {plantData.map((plant)=>( 
  <Card style={{ width: '18rem' , border: "1px solid #013606"}}>
  <Card.Img variant="top" src={dummyPlant} />
  <Card.Body>
  

    <Card.Title className="plantcard_title">{plant}</Card.Title>
    
    <Card.Text className="plantcard_text">
      I like to be watered <span className="plantcard_watering">twice weekly.</span>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
   
    <ListGroupItem className="plantcard_notification">Schedule notification:</ListGroupItem>
    <Form.Select size="sm">
    <option>Weekly</option>
    <option>Twice Weekly</option>
    <option>Monthly</option>
  </Form.Select>
    <Button className="plantcard_button" variant="success" type="submit">Create notification</Button>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Pause Notification</Card.Link>
    <Card.Link href="#">Remove Plant</Card.Link>
  </Card.Body>
  
</Card>
   ))}

</Col>

    
</Row>
  
</div>
  
</Container>
  
    </div>
)

}

export default Dashboard;