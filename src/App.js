import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/List/List"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import {DataContextProvider} from './dataContext/DataContext'

function App() {
	return (
		<DataContextProvider > 
		<div className='App'>


			<Container>
		

			<Router>
		<Navigationbar />
				<Routes>
					<Route path='/' element={<Home />}>
					</Route>
					<Route path='/registerform' element={<RegisterForm />}>
					</Route>
					<Route path='/loginform' element={<LoginForm />}>
					</Route>
					<Route path='/plants' element={<PlantsList />}>
					</Route>
				</Routes>
			</Router>
			</Container>
		</div>
		</DataContextProvider>
	);

}

export default App;
