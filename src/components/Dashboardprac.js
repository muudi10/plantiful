// import React, {useContext, useEffect, useState} from 'react'
// import { Container, Button, Form, Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
// import Emoji from "a11y-react-emoji";
// import dummyPlant from "../assets/dummyPlant.png"
// import {FlowerLotus} from "phosphor-react"
// import {UserContext} from '../dataContext/UserContext'
// import { useParams } from "react-router-dom"
// import "../styles/Dashboard.css"
// const initialState = {
//     plants: {
//         plantName: "Aloe Vera",
//     watering: "twice weekly"

//     }
// }

// const DashboardPrac = () => {
//  const [dummyPlantData, setDummyPlantData ] = useState(initialState.plants)
//  const [plantData, setPlantData] = useState(JSON.parse(localStorage.getItem('userPlants')))
// console.log(plantData)


//     return (
        
//         <div className="dashboard_wrapper">
// <Container>

// <div className="title_border">
//             <h2 className="dashboard_title">Your Plant Dashboard <Emoji symbol="🪴" label="plant-pot"/></h2>
//             </div>
            
//             <p className="dashboard_text">Welcome to your <span className="brandname">Plantiful</span> dashboard. Here you can set and amend notifications for your plants.</p>

//             <div className="dashboard_section">
 
  
//   <Row xs={1} md={3} className="g-4">
// {Array.from({ length: plantData.length}).map((_, idx) => ( 
//   <Col>
  
//   <Card style={{ width: '18rem' , border: "1px solid #013606"}}>
//   <Card.Img variant="top" src={dummyPlant} />
//   <Card.Body>
  
 
//     <Card.Title className="plantcard_title">{plant}</Card.Title>
    
//     <Card.Text className="plantcard_text">
//       I like to be watered <span className="plantcard_watering">{dummyPlantData.watering}</span>
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
   
//     <ListGroupItem className="plantcard_notification">Schedule notification:</ListGroupItem>
//     <Form.Select size="sm">
//     <option>Weekly</option>
//     <option>Twice Weekly</option>
//     <option>Monthly</option>
//   </Form.Select>
//     <Button className="plantcard_button" variant="success" type="submit">Create notification</Button>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Pause Notification</Card.Link>
//     <Card.Link href="#">Remove Plant</Card.Link>
//   </Card.Body>
  
// </Card>

// </Col>
//  ))}

// {/* //  ))} */}
    
// </Row>

// </div>
// </Container>
//         </div>
        

//     )
    
//   }

// export default DashboardPrac;

//   {/* <button onClick={displayList} className="dashboard_btn"> My Plant Collection <FlowerLotus size={18} style={{color: "#FFFFFF" }}/>  </button> */}

// // function removePlant() {
// // let entries = JSON.parse(localStorage.getItem('userPlants'))
// // entries.splice(1,1)
// // localStorage.setItem('userPlants',JSON.stringify(entries))
// // displayList() 
// // }


// // function displayList () {
// // let removePlant;
// //  let plantEntries = JSON.parse(localStorage.getItem('userPlants'))
// //   let html ='<tr><td class="table_title"></td><td></td></tr>'
// //   for(let i=0;i<plantEntries.length;i++){
// //    html += '<tr class="plants_list"><td>'+
// //         plantEntries[i]+'</td><td>'+
// //        '<select><option value="weekly">Weekly</option><option value="twice">Twice weekly</option><option value="monthly">Monthly</option></select></td><td><button class="dashboard_btn">Create notification</button><button class="pause_btn">Pause notification</button><button onclick="removePlant()" class="remove_btn">Remove Plant</button></tr> '
// //   }
// //  document.getElementById("plant_view").innerHTML= html
// //  var x = document.getElementById("plant_view");
// //   if (x.style.display === "none") {
// //     x.style.display = "block";
// //   } else {
// //     x.style.display = "none";
// //   }
// // }