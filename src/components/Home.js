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
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home_updated.css";
import MagnifyingGlass from "../assets/magnifying_glass.png"
import PlantShelf from "../assets/plant_shelf.png"
import PlantBook from "../assets/plant_book.png"
import PlantLightbulb from "../assets/plant_lightbulb.png"
import RedArrow from "../assets/red_arrow.png"
import HeroImage from "../assets/hero_image_2.png"

const Home = () => {
	return (
		<>
			<Container fluid className={"no-gutters mx-0 px-0"}>
				<Row noGutters={true}>
					<Col>
						<div className='landingpage_partone'>
							<div className="landingpage_partone_text">
							<h1 className='hero_header'>
								Have <span className='brandname'>Plantiful</span> Plants{" "}
								<FlowerLotus size={38} style={{color: "#013606" }}/>{" "}
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
							<div className="hero_image">
								<img src={HeroImage} alt="" style={{width: "112.5%"}}/>
							</div>
								
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
						<Col>
							<div className="box_one">
								 <div className='box_one_image'>
                                 <img src={MagnifyingGlass} alt=""/>
                                 </div>
								 <div className="box_all_text">
									<p className='box_title'>
										<NumberOne size={48} />
										SEARCH
									</p>
									<p>
										Search our inventory and find the plants you own
									</p>
                                   </div>
							</div>
						</Col>
					</Row>
					<div className="red_arrow_one">
						<img src={RedArrow} alt=""/>
					</div>
					
					<Row>
						<Col>
							<div className='box_two'>
							<div className='box_two_image'>
                                 <img src={PlantShelf} alt=""/>
                                 </div>
								 <div className="box_all_text">
									<p className='box_title'>
										<NumberTwo size={48} />
										ADD
									</p>
									<p>
										Add your plant collection to your customisable dashboard
									</p>
									</div>
							</div>
						</Col>
					</Row>
					<div className="red_arrow_two">
						<img src={RedArrow} alt=""/>
					</div>
					<Row>
						<Col>
							<div className='box_three'>
							<div className='box_three_image'>
                                 <img src={PlantBook} alt=""/>
                                 </div>
								<div className='box_all_text'>
									<p className='box_title'>
										<NumberThree size={48} />
										SCHEDULE
									</p>
									<p>
										Schedule reminders for each plant and we will send you
										notifications to water it.
									</p>
								</div>
							</div>
						</Col>
					</Row>
					<div className="red_arrow_three">
						<img src={RedArrow} alt=""/>
					</div>
					<Row>
						<Col>
							<div className='box_four'>
							<div className='box_four_image'>
                                 <img src={PlantLightbulb} alt=""/>
                                 </div>
								<div className='box_all_text'>
									<p className='box_title'>
										<NumberFour size={48} />
										LEARN
									</p>
									<p>
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
									style={{ backgroundColor: "#55A356", border: "#013606"}}
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
