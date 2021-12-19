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
import { UserContext } from "./dataContext/UserContext";
import { useContext, useEffect } from "react";
import jwt from "jsonwebtoken";
import { DataContext } from "./dataContext/DataContext";
import ApiCalls from "./dataContext/ApiServices";
function App() {
  const { userGloblaState,setPlantMatch, plants, setPlants, setUserGlobalState } = useContext(UserContext);
  console.log(plants)
  useEffect(() => {
    setPlantMatch(plants)
   const token = JSON.parse(window.localStorage.getItem("token"));
    const decodedUser = jwt.verify(token, "SECRETKEY");
      if (token) {
      setUserGlobalState({
        ...decodedUser,
        token: token,
      });
    };
  }, []);


  const {   userGlobalState,   setUserGlobalState}= useContext(UserContext)
console.log(userGlobalState)
  useEffect (()=>{
    const token= JSON.parse(window.localStorage.getItem("token"))
    if(token) {
      setUserGlobalState ({
        ...userGlobalState,
        token:token
      })

    }
  },[])

  
  console.log(userGloblaState);

  console.log(plants)
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
              <Route path="/plants/plantname/:latinname" element={<PlantPage />}></Route>{" "}
              <Route path="/dashboard" element={<Dashboard/>}></Route>
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
