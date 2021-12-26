import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import PlantPage from "./components/PlantPage";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoutes";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { DataContextProvider } from "./dataContext/DataContext";
import { UserRegContextProvider } from "./dataContext/userRegistration";
import { UserContextProvider } from "./dataContext/UserContext";
import { PlantContextProvider } from "./dataContext/PlantConetx";

import { UserContext } from "./dataContext/UserContext";
import { useContext, useEffect } from "react";
import jwt from "jsonwebtoken";
import { DataContext } from "./dataContext/DataContext";
import ApiCalls from "./dataContext/ApiServices";
function App() {
	const loggedInUSerId= JSON.parse(localStorage.getItem('userId'))

	const Secret = process.env.REACT_APP_JWT_SECRET;

	const {
		userGlobalState,
		setPlantMatch,
		plants,
		setPlants,
		setUserGlobalState,
	} = useContext(UserContext);


	return (
		<DataContextProvider>
			<UserRegContextProvider>
				<UserContextProvider>
					<PlantContextProvider > 
					<div className='App'>
						<Container fluid='true' className={"no-gutters mx-0 px-0"}>
							<Router>
								<Navigationbar fluid className={"no-gutters mx-0 px-0"} />
								<Routes>
									<Route path='/' element={<Home />}></Route>{" "}
									<Route
										path='/auth/register'
										element={<RegisterForm />}
									></Route>{" "}
									<Route path='/auth/login' element={<LoginForm />}></Route>{" "}
									<Route path='/plants' element={<PlantsList />}></Route>
									<Route
										path='/plants/:id'
										element={<PlantPage />}
									></Route>{" "}

									<Route
										path={`/users/${loggedInUSerId}`}
										element={
										<PrivateRoute>
												<Dashboard />
									</PrivateRoute>
										}
									/>
									<Route path='*' element={<ErrorPage />}></Route>
								</Routes>{" "}
							</Router>{" "}
							<div className='page_container'>
								<div classname='content_wrap'>
									<Footer />
								</div>
							</div>
						</Container>{" "}
					</div>{" "}
					</PlantContextProvider>
				</UserContextProvider>
			</UserRegContextProvider>
		</DataContextProvider>
	);
}

export default App;
