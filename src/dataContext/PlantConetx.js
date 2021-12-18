import { useState, useEffect, createContext } from "react";
import ApiServices from "./ApiServices";
export const PlantContext = createContext();

export const PlantContextProvider = (props) => {
  const [plants, setPlants] = useState();
  const [PlantMatch, setPlantMatch] = useState();

  const plantSearch = (search) => {
    let matchedPlant = plants.filter((plant) => {
      const regex = new RegExp(`${search}`, "gi");
      return plant.latinName.match(regex) || plant.familyName.match(regex);
    });
    setPlantMatch(matchedPlant);
  };

  const values = {
    plantSearch,
    PlantMatch,
    setPlants,
    plants,
    setPlantMatch,
    
  };

  return (
    <PlantContext.Provider value={values}>
      {" "}
      {props.children}{" "}
    </PlantContext.Provider>
  );
};
