import React from "react";
import {
	FlowerLotus,
	ArrowDown,
	ArrowRight,
	NumberOne,
	NumberTwo,
	NumberThree,
	NumberFour,
} from "phosphor-react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../styles/Home.css";
import MagnifyingGlass from "../assets/magnifying_glass.png"

const Home = () => {
	return (
		<>
			<Container fluid={true} className='p-0, Container'>
				<Row noGutters={true}>
					<Col>
						<div className='landingpage_partone'>
							<h1 className='hero_header'>
								Have <span className='brandname'>Plantiful</span> Plants{" "}
								<FlowerLotus size={38} />{" "}
							</h1>
							<p className='hero_description'>
								We help you keep your plants alive by sending helpful reminders
								straight to your inbox.
							</p>
							<Button
								href='#findoutmore'
								style={{ backgroundColor: "#55A356", border: "none" }}
							>
								Find out more <ArrowDown size={20} />
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='landingpage_parttwo_start'>
				<h2 className='landingpage_parttwo_header' id='findoutmore'>
					We can help you be the perfect plant parent!
				</h2>
				<p className='landingpage_parttwo_description'>
					Just follow these simple steps!
				</p>
			</div>
			<div className='landingpage_parttwo'>
				<Container className='boxes'>
					<Row>
						<Col md={4}>
							<div className='text-left'>
								 <div className='box_image'>
                                 <img src={MagnifyingGlass} alt="" className="box_image"/>
                                 </div>
									<p className='box_title'>
                                    
										<NumberOne size={48} />
										SEARCH
									</p>
									<p className='box_text'>
										Search our inventory and find the plants you own
									</p>
                                   
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<div className='box_two'>
								<div className='box'>
									<p className='box_title'>
										<NumberTwo size={48} />
										ADD
									</p>
									<p className='box_text'>
										Add your plant collection to your customisable dashboard
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<div className='box_three'>
								<div className='box'>
									<p className='box_title'>
										<NumberThree size={48} />
										SCHEDULE
									</p>
									<p className='box_text'>
										Schedule reminders for each plant and we will send you a
										notification when it is thirsty
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 3, offset: 3 }}>
							<div className='box_four'>
								<div className='box'>
									<p className='box_title'>
										<NumberFour size={48} />
										LEARN
									</p>
									<p className='box_text'>
										Learn handy tips and tricks to help best care for your
										plants.
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
                                <div className="signup_btn">
								<Button
									href='/registerform'
									type='submit'
									id='submit'
									style={{ backgroundColor: "#55A356", border: "#013606", textAlign: "center" }}
								>
									Sign up <ArrowRight size={20} />
								</Button>
                                </div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Home;
