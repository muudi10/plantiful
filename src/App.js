import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

function App() {
	return (
		<div className='App'>
			<Container fluid>
			<Router>
		<Navigationbar />
				<Routes>
					<Route path='/' element={<Home />}>
					</Route>
					<Route path='/registerform' element={<RegisterForm />}>
					</Route>
					<Route path='/loginform' element={<LoginForm />}>
					</Route>
				</Routes>
			</Router>
			</Container>
		</div>
	);
}

export default App;
