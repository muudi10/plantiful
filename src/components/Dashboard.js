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
import { FlowerLotus } from "phosphor-react";
import { UserContext } from "../dataContext/UserContext";
import { useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import ApiCalls from '../dataContext/ApiServices';

const Dashboard = () => {
  const [plantData, setPlantData] = useState(
    JSON.parse(localStorage.getItem("plants")) || []
  );
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
    frequncey: null,
  });
  const [frequncey, setFrequency] = useState();
  const handleFrequecny = (e) => {
    setFrequency(e.target.value);
  };
console.log(userGlobalState)

  const hanldePlantInfo = (e) => {
    setFrequency(e.target.value);
  };
const user =JSON.parse(localStorage.getItem("userId"))
console.log(user)
  const pureData = plantData.map((plant) => {
    return {
      plantId: plant._id,
      plantName: plant.familyName,
      watering: plant.watering,
    };
  });

    const handleSubmit = (event) => {
    event.preventDefault();
    ApiCalls.CreateNotification(notificationInfo, user)

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
        <div className="dashboard_section">
          <form onSubmit={handleSubmit}>
            <Row xs={2} md={4} className="g-4">
              <Col>
                {" "}
                {pureData.map((plant) => (
                  <Card
                    key={plant.plantId}
                    Card
                    style={{
                      width: "18rem",
                      border: "1px solid #013606",
                    }}
                  >
                    <Card.Img variant="top" src={dummyPlant} />{" "}
                    <Card.Body>
                      <Card.Title className="plantcard_title">
                        {" "}
                        {plant.plantName}{" "}
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
                        value={frequncey}
                        onChange={handleFrequecny}
                        size="sm"
                      >
                        <option> Weekly </option>{" "}
                        <option> Twice Weekly </option>{" "}
                        <option> Monthly </option>{" "}
                      </Form.Select>{" "}
                      <Button
                        className="plantcard_button"
                        variant="success"
                        onClick={() =>
                          setNotificationInfo({
                            plantName: plant.plantName,
                            plantId: plant.plantId,
                            frequncey: frequncey,
                          })
                        }
                        type="submit"
                      >
                        {" "}
                        Create notification{" "}
                      </Button>{" "}
                    </ListGroup>{" "}
                    <Card.Body>
                      <Link to={`${plant.plantId}`}>
                        {" "}
                        <Card.Link> Pause Notification </Card.Link>{" "}
                      </Link>
                      <Card.Link href="#"> Remove Plant </Card.Link>{" "}
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
