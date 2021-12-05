import {Plus, Heart } from "phosphor-react";
import React,{useEffect, useState, useContext} from "react";
import './list.css'
import {DataContext} from "../../dataContext/DataContext"
import axios from "axios";
import Pagination from '../Pagination/Pagination'
function List() {
  const {plants} = useContext(DataContext)
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
                <div className="input-group ">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="input-lg form-control"
                  />{" "}
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-sm btn-success">
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
                    <td className="">
                        <a href="plant-page">{plant.familyName}</a>
                        <br />
                    </td>
                    <td className="">
                        <small>{plant.origin}</small>
                    </td>

                    <td className="">
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
      <Pagination/>
    </>
  );
}

export default List;
