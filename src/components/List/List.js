<<<<<<< HEAD
import {Plus, Heart } from "phosphor-react";
import React,{useEffect, useState, useContext} from "react";
import './list.css'
import {DataContext} from "../../dataContext/DataContext"
=======
import { Plus, Heart, ArrowRight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./list.css";
// import {DataContext} from "../../dataContext/DataContext"
>>>>>>> 8c8b4a41f4f1097164a3b32dae003a772bacb929
import axios from "axios";
import {  Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
function List() {
<<<<<<< HEAD
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
=======
	// const {plants} = useContext(DataContext)
  const [plants, setPlants] = useState();
  
	const getPlant = async (setPlants) => {
		let endpoint = "/plants";
		const response = await axios.get(endpoint);
		// console.log(response);
		const data = await response.data;
		console.log(data[0]);
		setPlants(data);
	};
	

	useEffect(() => {
		getPlant(setPlants);
	}, []);

	// console.log(plants);
	return (
		<>
			<Container fluid style={{backgroundColor: "#F9F5F1"}}>
				<section className='panel'>
					<header className='panel-heading'></header>
					<div className='panel-body'>
						<div className='row p-3'>
							<div className='col-12'>
								<div className='input-group '>
									<input
										type='text'
										placeholder='Search for a plant..'
										className='w-50 search_input'
									/>

										<Button
										
											type='submit'
											id='submit'
											style={{
												backgroundColor: "#55A356",
												border: "#013606",
												margin: "8px",
												overflow: "hidden"
											}}
										>
											Go! <ArrowRight size={20} />
										</Button>
								</div>
							</div>
						</div>
					</div>
					<table className='table table-hover p-table'>
						<thead className='p_titles'>
							<tr>
								<th>Plant Name</th>
								<th>Image</th>
								<th>Origin</th>
								<th>Watering needs</th>
								<th>Temperature</th>
								<th>Like</th>
								<th>Add</th>
							</tr>
						</thead>
						<tbody>
							
							{plants &&
								plants.map((plant) => (
									<>
										<div className='user'></div>
										<tr>
											<td className='p-name'>
                        
											<Link to={`plantname/${plant.latinName}`}>	{plant.familyName} </Link>
                        
                      	<br />
											</td>
											<td className='p-name'>
												<a href="plant">{plant.familyName}</a>
												<br />
											</td>
											<td className='p-name'>
												<small>{plant.origin}</small>
											</td>

											<td className='p-name'>
												<small>{plant.watering}</small>
											</td>
											<td>
												<span className='label label-danger'>
													{plant.temperature}&deg;<sup>c</sup>
												</span>
											</td>
											<td>
												<Heart size={30} weight='bold' className='m-4' />
											</td>
											<td>
												<Plus size={20} weight='bold' />
											</td>
										</tr>
										
									</>
								))}
						</tbody>
					</table>
				</section>
			</Container>
			
			<Pagination />
			</>
	);
>>>>>>> 8c8b4a41f4f1097164a3b32dae003a772bacb929
}

export default List;
