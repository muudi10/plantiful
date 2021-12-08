import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/List/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import PlantPage from "./components/PlantPage";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { DataContextProvider } from "./dataContext/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Container fluid="true" className={"no-gutters mx-0 px-0"}>
          <Router>
            <Navigationbar fluid className={"no-gutters mx-0 px-0"}/>
            <Routes>
              <Route path="/" element={<Home />}></Route>{" "}
              <Route path="/registerform" element={<RegisterForm />}></Route>{" "}
              <Route path="/loginform" element={<LoginForm />}></Route>{" "}
              <Route path="/plants" element={<PlantsList />}></Route>
              <Route path="/plants/plantname/:latinname" element={<PlantPage/>}>
                </Route>{" "}
            </Routes>{" "}
          </Router>{" "}
		  <div className="page_container">
				<div classname="content_wrap">
			<Footer />
			</div>
			</div>
	
        </Container>{" "}
      </div>{" "}
    </DataContextProvider>
  );
}

export default App;
