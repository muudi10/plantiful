import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Button,
  Form,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "react-bootstrap";
import Emoji from "a11y-react-emoji";
import dummyPlant from "../assets/dummyPlant.png";
import { XCircle, CheckCircle, PauseCircle } from "phosphor-react";
import { UserContext } from "../dataContext/UserContext";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import ApiCalls from '../dataContext/ApiServices';
import axios from 'axios'


const Dashboard = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    }
  }
  const [alert, setAlert] = useState(initialState.alert)
  const {
    userGlobalState,
    setPlantMatch,
    plants,
    setPlants,
    setUserGlobalState,
  } = useContext(UserContext);
  const [notificationInfo, setNotificationInfo] = useState({
    plantName: null,
    plantId: null,
    frequency: null,
  });
  const [frequency, setFrequency] = useState();
  const handleFrequency = (e) => {
    setFrequency(e.target.value);
  };


  const user = JSON.parse(localStorage.getItem("userId"))
  const email = JSON.parse(localStorage.getItem("userEmail"))


  const [userPlants, setUserPlants] = useState([])
  const userId = window.location.pathname.split("/")[2]
  useEffect(() => {
    const getUserPlants = async () => {
      const res = await axios.get("/users/" + userId);
      setUserPlants(res.data.userPlants)

    };
    getUserPlants();
  }, [userId]);


  const handleSubmit = (event) => {
    event.preventDefault();
    ApiCalls.CreateNotification(notificationInfo, user, email)
    setAlert({
      message: "Notification created. Keep an eye on your inbox!📩",
     isSuccess: true
    })
  };

  return (
    <div className="dashboard_wrapper">
      <Container fluid>
        <div className="title_border">
          <h2 className="dashboard_title">
            {" "}
            Your Plant Dashboard <Emoji symbol="🪴" label="plant-pot" />{" "}
          </h2>{" "}
        </div>

        <p className="dashboard_text">
          {" "}
          Welcome to your <span className="brandname"> Plantiful </span>{" "}
          dashboard. Here you can set and amend notifications for your plants.
        </p>
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="dashboard_section">
          <form onSubmit={handleSubmit}>
            <Row xs={2} md={4} className="g-4" >
            
              <Col style={{display: "flex", flexDirection: "row"}}>
                {" "}
                {userPlants !== null ? userPlants.map((plant) => (
                  <Card
                    key={plant._id}
                    Card
                    style={{
                      width: "80rem",
                      border: "1px solid #013606",
                      flex: 1,
                      padding: "10px",
                      margin: "10px"
                    }}
                  >
                    <Card.Img variant="top" src={dummyPlant} />{" "}
                    <Card.Body>
                      <Card.Title className="plantcard_title">
                        {" "}
                        {plant.familyName}{" "}
                      </Card.Title>
                      <Card.Text className="plantcard_text">
                        I like to be watered{" "}
                        <span className="plantcard_watering">
                          {" "}
                          {plant.watering}{" "}
                        </span>{" "}
                      </Card.Text>{" "}
                    </Card.Body>{" "}
                    <ListGroup className="list-group-flush">
                      <ListGroupItem className="plantcard_notification">
                        {" "}
                        Schedule notification:{" "}
                      </ListGroupItem>{" "}
                      <Form.Select
                        value={frequency}
                        onChange={handleFrequency}
                        size="sm"
                      >
                        <option> Select Frequency </option>{" "}
                        <option> Weekly </option>{" "}
                        <option> Twice Weekly </option>{" "}
                        <option> Thrice Weekly </option>
                        <option> Monthly </option>{" "}
                      </Form.Select>{" "}
                      <Button
                        className="plantcard_button"
                        variant="success"
                        onClick={() =>
                          setNotificationInfo({
                            plantName: plant.familyName,
                            plantId: plant._id,
                            frequency: frequency,
                          
                          })
                        }
                        type="submit"
                      >
                        {" "}
                        Create notification{" "}
                      </Button>{" "}
                    </ListGroup>{" "}
                    <Card.Body>
                      <Link to={`${plant._id}`}>
                        {" "}
                  
                      </Link>
                      <Button onClick={() => {
                          ApiCalls.PauseNotification(user, plant._id);  setAlert({
                            message: "Settings updated. You will stop receiving notifications for this plant.",
                           isSuccess: true
                          })
                        }} className="remove_btn"><PauseCircle size={18} /> Mute Notification </Button>{" "}

                      <Button href="#" onClick={()=>{
                        ApiCalls.removePlant(user, plant._id)
                      }} className="remove_btn"><XCircle size={18} /> Remove Plant </Button>{" "}
                      <Button href="#" onClick={()=>{
                        ApiCalls.watered(user, plant._id); setAlert({
                          message: "Thanks for watering your plant! 🌱",
                         isSuccess: true
                        })
                      }} className="remove_btn"> <CheckCircle size={18} /> Plant Watered </Button>{" "}
           
                    </Card.Body>
                  </Card>
                  )) : "No Plants."}
             
              </Col>
            </Row>
           
          </form>
     
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
