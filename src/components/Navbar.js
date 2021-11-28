import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FlowerLotus } from "phosphor-react";
import '../styles/NavBar.css';

const Navigationbar = () => {
	return (
		<Navbar className="navigation">
			<Container>
				<Navbar.Brand href='/' style={{color: "#55A356", fontWeight: "700"}}>
					<FlowerLotus size={48} className="logo" />
					 Plantiful
				</Navbar.Brand>

				<Nav className="ml-auto" >
					<Nav.Link href='/plants' className="nav_link" style={{color: "#55A356", fontWeight: "600", fontSize: "20px"}}>Plants</Nav.Link>
					<Nav.Link href='/registerform' className="nav_link" style={{color: "#55A356", fontWeight: "600", fontSize: "20px"}}>Register</Nav.Link>
					<Nav.Link href='/loginform' className="nav_link" style={{color: "#55A356", fontWeight: "600", fontSize: "20px"}}>Log in</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;