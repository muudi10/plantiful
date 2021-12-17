import React from 'react'
import Emoji from "a11y-react-emoji";
import { useParams } from "react-router-dom"
import "../styles/Dashboard.css"

const Dashboard = (props) => {
    const {plantList, setPlantList } = props;
   let { user } = useParams()
   console.log(plantList)
   function removePlant(plant) {

   }
    return (
        <div>
        <h4>Dashboard</h4>
            <ul>
            {plantList && plantList.map((plant)=> (
                <li key={plant.id}>{plant.plantFamilyName} </li>
            )
            )}
            <div>
            {plantList.length === 0 && <div>Your Plant Dashboard is empty<Emoji symbol="🌱" label="plant"/> </div>}
            </div>

            <button onClick={() => setPlantList(0)}>Remove all plants</button>
            
            </ul>
        </div>
    )
}

export default Dashboard
