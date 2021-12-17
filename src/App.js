import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/List/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import PlantPage from "./components/PlantPage";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { DataContextProvider } from "./dataContext/DataContext";
import { UserRegContextProvider } from "./dataContext/userRegistration";
import { UserContextProvider } from "./dataContext/UserContext";
import {UserContext} from './dataContext/UserContext'
import { useContext, useEffect } from 'react';

function App() {

  const {   userGloblaState,   setUserGlobalState}= useContext(UserContext)
console.log(userGloblaState)
  useEffect (()=>{
    const token= JSON.parse(window.localStorage.getItem("token"))
    if(token) {
      setUserGlobalState ({
        ...userGloblaState,
        token:token
      })

    }
  },[])

>>>>>>> 3f4eabfe4a5ef69a26eee66b6513d9f24063c95b
  return (

    <DataContextProvider>
      <UserRegContextProvider>
        <UserContextProvider>
      <div className="App">
        <Container fluid="true" className={"no-gutters mx-0 px-0"}>
          <Router>
            <Navigationbar fluid className={"no-gutters mx-0 px-0"}/>
            <Routes>
              <Route path="/" element={<Home />}></Route>{" "}
              <Route path="/registerform" element={<RegisterForm />}></Route>{" "}
              <Route path="/loginform" element={<LoginForm />}></Route>{" "}
              <Route path="/plants" element={<PlantsList />}></Route>
              <Route path="/plants/plantname/:latinname" element={<PlantPage plantList={plantList} setPlantList={setPlantList}/>}></Route>{" "}
              <Route path="/userplants/:user" element={<Dashboard plantList={plantList} setPlantList={setPlantList}/>}></Route>
              <Route path="/dashboard" element={<Dashboard plantList={plantList} setPlantList={setPlantList}/>}> </Route>
              <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>{" "}
          </Router>{" "}
		  <div className="page_container">
				<div classname="content_wrap">
			<Footer />
			</div>
			</div>
	
        </Container>{" "}
      </div>{" "}
      </UserContextProvider>
      </UserRegContextProvider>
    </DataContextProvider>
  );
}

export default App;
