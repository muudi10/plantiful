import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
	return (
		<div className='App'>
			<Router>
      <nav>
          <ul>
          <li><Link to='/plants'>Plants</Link></li>
          <li><Link to='/registerform'>Register</Link></li>
					<li><Link to='/loginform'>Log in</Link></li>
          </ul>
				</nav>
				<Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/registerform" element={<RegisterForm />}> </Route>
					<Route path="/loginform" element={<LoginForm />}> </Route>
          <Route path="/dashboard" element={<Dashboard />}> </Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
