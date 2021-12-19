import { Plus, Heart, ArrowRight } from "phosphor-react";
import React, { useEffect, useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./list.css";
import { UserContext } from "../../dataContext/UserContext";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import ApiCalls from "../../dataContext/ApiServices";

function List() {
  const { plants, PlantMatch, setPlantMatch } =
    useContext(UserContext);
  const [search, setSearch] = useState("");

  const handleLoginInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    plantSearch(search);
  };

  const plantSearch = (search) => {
    let matchedPlant = plants.filter((plant) => {
      const regex = new RegExp(`${search}`, "gi");
      return plant.latinName.match(regex) || plant.familyName.match(regex);
    });
    setPlantMatch(matchedPlant)
   
  };

const rendering =  (PlantMatch.length > 0 )? PlantMatch:plants

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#F9F5F1",
        }}
      >
        <section className="panel">
          <header className="panel-heading"> </header>{" "}
          <div className="panel-body">
            <div className="row p-3">
              <div className="col-12">
                <div className="input-group ">
                  <input
                    type="text"
                    placeholder="Search for a plant.."
                    className="w-50 search_input"
                    value={search}
                    onChange={handleLoginInputChange}
                  />
                  <Button
                    type="submit"
                    id="submit"
                    style={{
                      backgroundColor: "#55A356",
                      border: "#013606",
                      margin: "8px",
                      overflow: "hidden",
                    }}
                  >
                    Go! <ArrowRight size={20} />{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <table className="table table-hover p-table">
            <thead className="p_titles">
              <tr>
                <th> Plant Name </th> <th> Image </th> <th> Origin </th>{" "}
                <th> Watering needs </th> <th> Temperature </th> <th> Like </th>{" "}
                <th> Add </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {rendering &&
                rendering.map((plant, index) => (
                  <>
                    <div className="user"> </div>{" "}
                    <tr>
                      <td className="p-name">
                        <Link to={`plantname/${plant.latinName}`}>
                          {" "}
                          {plant.familyName}{" "}
                        </Link>

                        <br />
                      </td>{" "}
                      <td className="p-name">
                        <a href="plant"> {plant.familyName} </a> <br />
                      </td>{" "}
                      <td className="p-name">
                        <small> {plant.origin} </small>{" "}
                      </td>
                      <td className="p-name">
                        <small> {plant.watering} </small>{" "}
                      </td>{" "}
                      <td>
                        <span className="label label-danger">
                          {" "}
                          {plant.temperature} &deg; <sup> c </sup>{" "}
                        </span>{" "}
                      </td>{" "}
                      <td>
                        <Heart size={30} weight="bold" className="m-4" />
                      </td>{" "}
                      <td>
                        <Plus size={20} weight="bold" />
                      </td>{" "}
                    </tr>
                  </>
                ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </section>{" "}
      </Container>

      <Pagination />
    </>
  );
}

export default List;
