import React, {useContext, useEffect, useState} from 'react'
import { Container, Button } from "react-bootstrap";
import Emoji from "a11y-react-emoji";
import {FlowerLotus} from "phosphor-react"
import {UserContext} from '../dataContext/UserContext'
import { useParams } from "react-router-dom"
import "../styles/Dashboard.css"


const Dashboard = () => {
 
//      const [userPlants, setUserPlants] = useState("")
//      const [user, setUser ] = useState("")
  
// useEffect(()=> {
// setUserPlants(localStorage.getItem("userPlants"))
// setUser(localStorage.getItem("userDetails"))}

// )
// console.log(user)
function removePlant() {
let entries = JSON.parse(localStorage.getItem('userPlants'))
entries.splice(1,1)
localStorage.setItem('userPlants',JSON.stringify(entries))
displayList() 
}


function displayList () {
 let plantEntries = JSON.parse(localStorage.getItem('userPlants'))
  let html ='<tr><td class="table_title"></td><td></td></tr>'
  for(let i=0;i<plantEntries.length;i++){
   html += '<tr class="plants_list"><td>'+
        plantEntries[i]+'</td><td>'+
       '<select><option value="weekly">Weekly</option><option value="twice">Twice weekly</option><option value="monthly">Monthly</option></select></td><td><button class="dashboard_btn">Create notification</button><button class="pause_btn">Pause notification</button><button onclick="removePlant()" class="remove_btn">Remove Plant</button></tr> '
  }
 document.getElementById("plant_view").innerHTML= html
 var x = document.getElementById("plant_view");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



    return (
        <div className="wrapper">
<Container>
<div className="title_border">
            <h2 className="dashboard_title">Your Plant Dashboard <Emoji symbol="🪴" label="plant-pot"/></h2>
            </div>
            <p className="dashboard_text">Welcome to your <span className="brandname">Plantiful</span> dashboard. Here you can set and amend notifications for your plants.</p>

            <div class="plant_table">
            <div className="dashboard_section">
  <button onClick={displayList} className="dashboard_btn"> My Plant Collection <FlowerLotus size={18} style={{color: "#FFFFFF" }}/>  </button>
 </div>
  <table  id="plant_view">
    
  </table>
</div>
</Container>
        </div>
    )
}

export default Dashboard

