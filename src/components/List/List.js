import {Plus, Heart } from "phosphor-react";
import React,{useEffect, useState} from "react";
import './list.css'
// import {DataContext} from "../../dataContext/DataContext"
import axios from "axios";

function List() {

    const getPlant = async(setPlants)=>{
        let endpoint = '/plants';
        const response = await axios.get(endpoint)
        console.log(response)
        const data = await response.data
        console.log( typeof (data[0]._id))
        setPlants(data)
    }
    const [plants , setPlants] = useState()
    

    useEffect(()=>{
        getPlant(setPlants)
        

    },[])

    console.log(plants)
  return (
    <>
      <div className="container">
        <section className="panel">
          <header className="panel-heading">
          
          </header>
          <div className="panel-body">
            <div className="row p-3">
              <div className="col-12">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="input-sm form-control"
                  />{" "}
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-lg btn-success">
                      {" "}
                      Go!
                    </button>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-hover p-table">
            <thead>
              <tr>
                <th>Plant Name</th>
                <th>Image</th>
                <th>Origin</th>
                <th>Waterning needs</th>
                <th>Temperature</th>
                <th>Like</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody>
        

         {  plants &&    plants.map((plant) => (
             
        <><div className="user"></div><tr>
                    <td className="p-name">
                        <a href="plant-page">{plant.familyName}</a>
                        <br />
                    </td>
                    <td className="p-name">
                        <a href="plant-page">{plant.familyName}</a>
                        <br />
                    </td>
                    <td className="p-team">
                        <small>{plant.origin}</small>
                    </td>

                    <td className="p-progress">
                     <small>{plant.watering}</small>
                    </td>
                    <td>
                        <span className="label label-danger">{plant.temperature}</span>
                    </td>
                    <td>
                        <Heart size={30} weight="bold" className="m-4" />
                    </td>
                    <td>
                        <Plus size={20} weight="bold" />
                    </td>
                </tr></>

 ))}
             

            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default List;
