import React,{useContext} from "react";
import "./navbar.css";
import {DataContext} from "../../dataContext/DataContext"
export default function TopBar() {
  const {searchTerm, handleInputChange} = useContext(DataContext);
  return (
    <div className="container top-bar">
      <div className="wrapper">
        <div className="logo">
          <span> Plantiful </span>{" "}
        </div>{" "}
        <div className="search">
          <form action="/">
            <input type="text" placeholder="Search.." onChange={handleInputChange} value={searchTerm} size = "50" name="search" />
            <button type="submit">
              {" "}
              <i class="fa fa-search"> </i>
            </button>
          </form>
        </div>
        <div className="nav-links">
          <ul>
            <li>About</li>
            <li>plants</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
