import React, {useContext} from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { UserContext } from "../dataContext/UserContext";
import { UserContextProvider } from "../dataContext/UserContext";
import { FlowerLotus } from "phosphor-react";
import '../styles/NavBar.css';

const Navigationbar = () => {
	const logout = () => {
        return localStorage.removeItem("token");
    }
	
	const loggedInUSerId= JSON.parse(localStorage.getItem('userId'))

	const { token } = useContext(UserContext)
	return (
		<UserContextProvider>
		<Navbar className="navigation" fluid >
			<Container fluid className={"no-gutters mx-0 px-0"}>
				<Navbar.Brand href='/' style={{color: "#3F7740", fontWeight: "700"}}>
					<FlowerLotus size={48} className="logo" style={{color: "#3F7740"}} />
					 Plantiful
				</Navbar.Brand>
				<Nav className="ml-auto" >
					<Nav.Link href='/plants' className="nav_link" style={{color: "#3F7740", fontWeight: "600", fontSize: "20px"}}>Plants</Nav.Link>
					{token ? (
					<><Nav.Link href={`/users/${loggedInUSerId}`} className="nav_link" style={{ color: "#3F7740", fontWeight: "600", fontSize: "20px" }}>Dashboard</Nav.Link><Nav.Link href="/auth/login" className="nav_link" style={{ color: "#3F7740", fontWeight: "600", fontSize: "20px" }} onClick={() => logout()}>Log Out</Nav.Link></>
					) : (
					<><Nav.Link href='/auth/register' className="nav_link" style={{ color: "#3F7740", fontWeight: "600", fontSize: "20px" }}>Register</Nav.Link><Nav.Link href='/auth/login' className="nav_link" style={{ color: "#3F7740", fontWeight: "600", fontSize: "20px" }}>Log in</Nav.Link></>)}
				</Nav>
			</Container>
			
		</Navbar>
		</UserContextProvider>
	);
};

export default Navigationbar;